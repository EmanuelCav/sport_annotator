package controller

import (
	"strconv"

	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/helper"
	"github.com/EmanuelCav/sport_annotator/middleware"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/EmanuelCav/sport_annotator/validation"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func Dashboards(c *fiber.Ctx) error {

	var dashboards []models.DashboardModel

	userId := middleware.UserId(c)

	if err := database.Db.Where("user_id = ?", userId).Preload("Teams.Points").
		Preload("Category", func(db *gorm.DB) *gorm.DB {
			return db.Select("id", "category")
		}).
		Preload("User", func(db *gorm.DB) *gorm.DB {
			return db.Select("id")
		}).Find(&dashboards); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error.Error(),
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"dashboards": dashboards,
	})

}

func Dashboard(c *fiber.Ctx) error {

	var dashboard models.DashboardModel

	id, err := strconv.Atoi(c.Params("id"))

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	dashboardId := uint(id)

	if err := database.Db.Where("id = ?", dashboardId).
		Preload("Teams.Points").
		Preload("Category", func(db *gorm.DB) *gorm.DB {
			return db.Select("id", "category")
		}).
		Preload("User", func(db *gorm.DB) *gorm.DB {
			return db.Select("id")
		}).
		First(&dashboard); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "Dashboard does not exists",
		})
	}

	if dashboard.UserID != middleware.UserId(c) {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "You cannot get this dashboard",
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"dashboard": dashboard,
	})

}

func CreateDashboards(c *fiber.Ctx) error {

	var createDashboard models.CreateDashboardModel
	var category models.CategoryModel
	var team models.TeamModel

	if err := c.BodyParser(&createDashboard); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	if err := helper.Validate().Struct(&createDashboard); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "There are empty field. Please complete",
		})
	}

	if err := validation.DashboardValid(createDashboard); err != "" {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err,
		})
	}

	if err := database.Db.Where("category = ?", createDashboard.Category).First(&category); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "Category does not exists",
		})
	}

	userId := middleware.UserId(c)

	dashboard := models.DashboardModel{
		Name:   createDashboard.Name,
		UserID: userId,
		Teams: []models.TeamModel{
			{
				Name:   "Team1",
				Points: []models.PointModel{},
				Games:  []uint{},
				Sets:   []uint{},
			},
			{
				Name:   "Team2",
				Points: []models.PointModel{},
				Games:  []uint{},
				Sets:   []uint{},
			},
		},
		Markers:    []uint{},
		CategoryID: category.ID,
	}

	dashboardSaved := database.Db.Create(&dashboard)

	if dashboardSaved.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": dashboardSaved.Error.Error(),
		})
	}

	if err := database.Db.Preload("Teams.Points").
		Preload("Category", func(db *gorm.DB) *gorm.DB {
			return db.Select("id", "category")
		}).
		Preload("User", func(db *gorm.DB) *gorm.DB {
			return db.Select("id")
		}).Find(&dashboard); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "User does not exists",
		})
	}

	updateData := map[string]interface{}{
		"DashboardID": dashboard.ID,
	}

	for i := 0; i < len(dashboard.Teams); i++ {
		if err := database.Db.Model(&team).Where("id = ?", dashboard.Teams[i].ID).Updates(updateData).Error; err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
				"message": err.Error(),
			})
		}
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"dashboard": dashboard,
		"message":   "Dashboard created successfully",
	})

}

func RemoveDashboard(c *fiber.Ctx) error {

	var dashboard models.DashboardModel

	id, err := strconv.Atoi(c.Params("id"))

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	dashboardId := uint(id)

	if err := database.Db.Where("id = ?", dashboardId).First(&dashboard); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "Dashboard does not exists",
		})
	}

	if dashboard.UserID != middleware.UserId(c) {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "You cannot remove this dashboard",
		})
	}

	database.Db.Where("id = ?", dashboardId).Delete(&dashboard)

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"message": "Dashboard removed successfully",
	})
}

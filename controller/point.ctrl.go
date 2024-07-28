package controller

import (
	"strconv"

	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/helper"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func UpdatePoints(c *fiber.Ctx) error {

	var team models.TeamModel
	var dashboard models.DashboardModel
	var pointData models.PointData

	id, err := strconv.Atoi(c.Params("id"))

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	teamId := uint(id)

	if err := database.Db.Where("id = ?", teamId).First(&team); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "Team does not exists",
		})
	}

	if err := c.BodyParser(&pointData); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	if err := helper.Validate().Struct(&pointData); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "There are empty field. Please complete",
		})
	}

	newPoint := models.PointModel{
		TeamID: teamId,
		Player: "",
		Point:  pointData.Points,
	}

	team.Points = append(team.Points, newPoint)

	if err := database.Db.Save(&team).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	if err := database.Db.Where("id = ?", team.DashboardID).First(&dashboard); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error.Error(),
		})
	}

	dashboard.PointsHistory = append(dashboard.PointsHistory, newPoint)

	if err := database.Db.Save(&dashboard).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	if err := database.Db.Where("id = ?", team.DashboardID).
		Preload("PointsHistory").
		Preload("Teams.Points").
		Preload("Category", func(db *gorm.DB) *gorm.DB {
			return db.Select("id", "category")
		}).
		Preload("User", func(db *gorm.DB) *gorm.DB {
			return db.Select("id")
		}).First(&dashboard); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "Dashboard does not exists",
		})
	}

	return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
		"dashboard": dashboard,
	})

}

func ComebackPoints(c *fiber.Ctx) error {

	var point models.PointModel
	var dashboard models.DashboardModel

	id, err := strconv.Atoi(c.Params("id"))

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	pointId := uint(id)

	if err := database.Db.Where("id = ?", pointId).First(&point); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "Point does not exists",
		})
	}

	dashboardId := point.DashboardID

	database.Db.Where("id = ?", pointId).Delete(&point)

	if err := database.Db.Where("id = ?", dashboardId).
		Preload("PointsHistory").
		Preload("Teams.Points").
		Preload("Category", func(db *gorm.DB) *gorm.DB {
			return db.Select("id", "category")
		}).
		Preload("User", func(db *gorm.DB) *gorm.DB {
			return db.Select("id")
		}).First(&dashboard); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "Dashboard does not exists",
		})
	}

	return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
		"dashboard": dashboard,
	})

}

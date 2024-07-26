package controller

import (
	"strconv"

	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/helper"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/gofiber/fiber/v2"
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

	if err := database.Db.Where("id = ?", team.DashboardID).Preload("Teams").Preload("Category").
		First(&dashboard); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "Dashboard does not exists",
		})
	}

	return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
		"dashboard": dashboard,
	})

}

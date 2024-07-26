package controller

import (
	"fmt"
	"strconv"

	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/helper"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/gofiber/fiber/v2"
)

func UpdateTeam(c *fiber.Ctx) error {

	var team models.TeamModel
	var updateTeam models.UpdateTeamModel
	var dashboard models.DashboardModel

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

	if err := c.BodyParser(&updateTeam); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	if err := helper.Validate().Struct(&updateTeam); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "There are empty field. Please complete",
		})
	}

	updateData := map[string]interface{}{
		"Name": updateTeam.Name,
	}

	teamValid := database.Db.Model(&team).Where("id = ?", teamId).Updates(updateData)

	if teamValid.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": teamValid.Error.Error(),
		})
	}

	fmt.Println(team)

	if err := database.Db.Where("id = ?", team.DashboardID).Preload("Teams").Preload("Category").
		First(&dashboard); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "Dashboard does not exists",
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"dashboard": dashboard,
	})

}

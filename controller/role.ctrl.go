package controller

import (
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/helper"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/EmanuelCav/sport_annotator/validation"
	"github.com/gofiber/fiber/v2"
)

func Roles(c *fiber.Ctx) error {

	var roles []models.RoleModel

	database.Db.Find(&roles)

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"roles": roles,
	})

}

func CreateRole(c *fiber.Ctx) error {

	var createRole models.CreateRoleModel

	if err := c.BodyParser(&createRole); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	if err := helper.Validate().Struct(&createRole); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "There are empty field. Please complete",
		})
	}

	if err := validation.RoleValid(createRole); err != "" {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err,
		})
	}

	role := models.RoleModel{
		Role: createRole.Role,
	}

	roleSaved := database.Db.Create(&role)

	if roleSaved.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": roleSaved.Error.Error(),
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"role":    role,
		"message": "Role created successfully",
	})

}

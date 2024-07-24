package controller

import (
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/gofiber/fiber/v2"
)

func Users(c *fiber.Ctx) error {

	var users []models.UserModel

	database.Db.Find(&users)

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"users": users,
	})

}

func CreateUser(c *fiber.Ctx) error {

	var users []models.UserModel

	database.Db.Find(&users)

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"users": users,
	})

}

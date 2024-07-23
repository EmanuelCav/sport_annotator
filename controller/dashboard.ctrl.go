package controller

import (
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/gofiber/fiber/v2"
)

func Dashboards(c *fiber.Ctx) error {

	var dashboards []models.DashboardModel

	database.Db.Find(&dashboards)

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"dashboards": dashboards,
	})

}

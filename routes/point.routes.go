package routes

import (
	"github.com/EmanuelCav/sport_annotator/controller"
	"github.com/EmanuelCav/sport_annotator/middleware"
	"github.com/gofiber/fiber/v2"
)

func PointRoute(app *fiber.App) {

	app.Put("/points/teams/:id", middleware.Auth(), controller.UpdatePoints)
	app.Put("/points/:id", middleware.Auth(), controller.ComebackPoints)

}

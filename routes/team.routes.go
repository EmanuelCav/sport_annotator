package routes

import (
	"github.com/EmanuelCav/sport_annotator/controller"
	"github.com/EmanuelCav/sport_annotator/middleware"
	"github.com/gofiber/fiber/v2"
)

func TeamRoute(app *fiber.App) {

	app.Put("/teams/:id", middleware.Auth(), controller.UpdateTeam)

}

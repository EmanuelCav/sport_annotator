package routes

import (
	"github.com/EmanuelCav/sport_annotator/controller"
	"github.com/EmanuelCav/sport_annotator/middleware"
	"github.com/gofiber/fiber/v2"
)

func RoleRoute(app *fiber.App) {

	app.Get("/roles", middleware.Auth(), middleware.Admin(), controller.Roles)
	app.Post("/roles", middleware.Auth(), middleware.Admin(), controller.CreateRole)

}

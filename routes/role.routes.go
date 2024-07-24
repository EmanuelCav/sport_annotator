package routes

import (
	"github.com/EmanuelCav/sport_annotator/controller"
	"github.com/gofiber/fiber/v2"
)

func RoleRoute(app *fiber.App) {

	app.Get("/roles", controller.Roles)
	app.Post("/roles", controller.CreateRole)

}

package routes

import (
	"github.com/EmanuelCav/sport_annotator/controller"
	"github.com/gofiber/fiber/v2"
)

func UserRoute(app *fiber.App) {

	app.Get("/users", controller.Users)

}

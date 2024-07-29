package routes

import (
	"github.com/EmanuelCav/sport_annotator/controller"
	"github.com/gofiber/fiber/v2"
)

func ImageRoute(app *fiber.App) {

	app.Get("/images", controller.Images)
	app.Post("/images", controller.CreateImage)

}

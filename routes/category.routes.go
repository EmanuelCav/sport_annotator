package routes

import (
	"github.com/EmanuelCav/sport_annotator/controller"
	"github.com/gofiber/fiber/v2"
)

func CategoryRoute(app *fiber.App) {

	app.Get("/categories", controller.Categories)
	app.Post("/categories", controller.CreateCategory)

}

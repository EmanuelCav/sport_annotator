package routes

import (
	"github.com/EmanuelCav/sport_annotator/controller"
	"github.com/EmanuelCav/sport_annotator/middleware"
	"github.com/gofiber/fiber/v2"
)

func CategoryRoute(app *fiber.App) {

	app.Get("/categories", controller.Categories)
	app.Post("/categories", middleware.Auth(), middleware.Admin(), controller.CreateCategory)

}

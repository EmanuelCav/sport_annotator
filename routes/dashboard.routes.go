package routes

import (
	"github.com/EmanuelCav/sport_annotator/controller"
	"github.com/gofiber/fiber/v2"
)

func DashboardRoute(app *fiber.App) {

	app.Get("/dashboards", controller.Dashboards)

}

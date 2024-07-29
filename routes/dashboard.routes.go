package routes

import (
	"github.com/EmanuelCav/sport_annotator/controller"
	"github.com/EmanuelCav/sport_annotator/middleware"
	"github.com/gofiber/fiber/v2"
)

func DashboardRoute(app *fiber.App) {

	app.Get("/dashboards", middleware.Auth(), controller.Dashboards)
	app.Get("/dashboards/:id", middleware.Auth(), controller.Dashboard)
	app.Post("/dashboards", middleware.Auth(), controller.CreateDashboards)
	app.Delete("/dashboards/:id", middleware.Auth(), controller.RemoveDashboard)
	app.Put("/dashboards/:id", middleware.Auth(), controller.UpdateDashboard)
	app.Patch("/dashboards/:id", middleware.Auth(), controller.ResetDashboard)

}

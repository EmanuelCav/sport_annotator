package main

import (
	"log"

	"github.com/EmanuelCav/sport_annotator/config"
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/EmanuelCav/sport_annotator/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
)

func main() {

	app := fiber.New()

	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading env file")
	}

	database.Database()

	database.Db.AutoMigrate(models.DashboardModel{})
	database.Db.AutoMigrate(models.CategoryModel{})
	database.Db.AutoMigrate(models.PointModel{})
	database.Db.AutoMigrate(models.RoleModel{})
	database.Db.AutoMigrate(models.TeamModel{})
	database.Db.AutoMigrate(models.UserModel{})

	app.Use(logger.New())
	app.Use(cors.New())

	routes.DashboardRoute(app)
	routes.CategoryRoute(app)
	routes.UserRoute(app)
	routes.RoleRoute(app)

	if err := app.Listen(":" + config.Config()["port"]); err != nil {
		log.Fatal("Error to connect server")
	}

}

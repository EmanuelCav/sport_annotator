package main

import (
	"log"

	"github.com/EmanuelCav/sport_annotator/config"
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

	app.Use(logger.New())
	app.Use(cors.New())

	routes.DashboardRoute(app)

	if err := app.Listen(":" + config.Config()["port"]); err != nil {
		log.Fatal("Error to connect server")
	}

}

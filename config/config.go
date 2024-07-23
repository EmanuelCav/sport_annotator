package config

import (
	"log"

	"github.com/joho/godotenv"
)

func Config() map[string]string {

	envFile, err := godotenv.Read(".env")

	if err != nil {
		log.Fatal("Error loading env file")
	}

	variables := make(map[string]string)

	variables["port"] = envFile["PORT"]

	return variables
}

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
	variables["db_uri"] = envFile["DB_URI"]
	variables["user_role"] = envFile["USER_ROLE"]
	variables["jwt"] = envFile["JWT"]

	return variables
}

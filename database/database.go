package database

import (
	"log"

	"github.com/EmanuelCav/sport_annotator/config"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Db *gorm.DB

func Database() {

	dsn := config.Config()["db_uri"]

	var err error

	Db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("failed to connect database")
	} else {
		log.Println("Database is running")
	}

}

package models

import "gorm.io/gorm"

type CategoryModel struct {
	gorm.Model
	Category string `gorm:"type:varchar(20);not null"`
}

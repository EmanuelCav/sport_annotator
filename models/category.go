package models

import "gorm.io/gorm"

type CategoryModel struct {
	gorm.Model
	Category string `json:"category" gorm:"type:varchar(20);unique;not null"`
}

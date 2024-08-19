package models

import "gorm.io/gorm"

type CategoryModel struct {
	gorm.Model
	Category string `json:"category" gorm:"type:varchar(20);unique;not null"`
	Image string `json:"image" gorm:"type:varchar(255);unique;not null"`
}

type CreateCategoryModel struct {
	Category string `json:"category" validate:"required"`
}

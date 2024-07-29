package models

import (
	"mime/multipart"

	"gorm.io/gorm"
)

type ImageModel struct {
	gorm.Model
	Image   string `json:"image" gorm:"type:varchar(200);not null"`
	ImageId string `json:"imageID" gorm:"type:varchar(200);not null"`
}

type File struct {
	File multipart.File `json:"file,omitempty" validate:"required"`
}

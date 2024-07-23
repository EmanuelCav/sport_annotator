package models

import "gorm.io/gorm"

type TeamModel struct {
	gorm.Model
	Name   string       `gorm:"type:varchar(40);not null"`
	Points []PointModel `gorm:"foreignKey:TeamId"`
	Games  []uint       `gorm:"type:json"`
	Sets   []uint       `gorm:"type:json"`
}

package models

import "gorm.io/gorm"

type DashboardModel struct {
	gorm.Model
	Name       string `gorm:"type:varchar(60);not null"`
	Markers    []uint `gorm:"type:json"`
	CategoryID uint
	Category   CategoryModel
	Seconds    uint
	Minutes    uint
	Hours      uint
}

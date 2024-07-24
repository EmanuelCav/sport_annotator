package models

import "gorm.io/gorm"

type DashboardModel struct {
	gorm.Model
	Name       string        `json:"name" gorm:"type:varchar(60);not null"`
	Markers    []uint        `json:"markers" gorm:"type:json"`
	CategoryID uint          `json:"CategoryID"`
	Category   CategoryModel `json:"category" gorm:"foreignKey:CategoryID;references:ID"`
	Seconds    uint          `json:"seconds"`
	Minutes    uint          `json:"minutes"`
	Hours      uint          `json:"hours"`
}

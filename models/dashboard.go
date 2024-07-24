package models

import "gorm.io/gorm"

type DashboardModel struct {
	gorm.Model
	Name       string        `json:"name" gorm:"type:varchar(60);not null"`
	Markers    []uint        `json:"markers" gorm:"type:json"`
	CategoryID uint          `json:"categoryId"`
	Category   CategoryModel `json:"category"`
	Seconds    uint          `json:"seconds"`
	Minutes    uint          `json:"minutes"`
	Hours      uint          `json:"hours"`
}

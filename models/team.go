package models

import "gorm.io/gorm"

type TeamModel struct {
	gorm.Model
	Name        string       `json:"name" gorm:"type:varchar(40);not null"`
	Points      []PointModel `json:"points" gorm:"foreignKey:TeamID;constraint;OnDelete:CASCADE"`
	Games       []uint       `json:"games" gorm:"type:json"`
	Sets        []uint       `json:"sets" gorm:"type:json"`
	DashboardID uint         `json:"dashboard_id"`
}

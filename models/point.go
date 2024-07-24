package models

import "gorm.io/gorm"

type PointModel struct {
	gorm.Model
	Team   TeamModel `json:"team" gorm:"foreignKey:TeamID;references:ID"`
	TeamID uint      `json:"TeamID"`
	Point  uint      `json:"point"`
	Player string    `json:"player"`
}

package models

import "gorm.io/gorm"

type PointModel struct {
	gorm.Model
	Team   TeamModel `json:"team"`
	TeamId uint      `json:"teamId"`
	Point  uint      `json:"point"`
	Player string    `json:"player"`
}

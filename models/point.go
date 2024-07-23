package models

import "gorm.io/gorm"

type PointModel struct {
	gorm.Model
	Team   TeamModel
	TeamId uint
	Point  uint
	Player string
}

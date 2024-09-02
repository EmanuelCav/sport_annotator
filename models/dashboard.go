package models

import (
	"database/sql/driver"
	"encoding/json"

	"gorm.io/gorm"
)

type DashboardModel struct {
	gorm.Model
	Name          string        `json:"name" gorm:"type:varchar(60);not null"`
	Markers       UintSlice     `json:"markers" gorm:"type:json"`
	Teams         []TeamModel   `json:"teams" gorm:"foreignKey:DashboardID;constraint;OnDelete:CASCADE"`
	PointsHistory []PointModel  `json:"pointshistory" gorm:"foreignKey:DashboardID;constraint;OnDelete:CASCADE"`
	CategoryID    uint          `json:"CategoryID"`
	Category      CategoryModel `json:"category" gorm:"foreignKey:CategoryID;references:ID"`
	Seconds       uint          `json:"seconds" gorm:"default:0"`
	Minutes       uint          `json:"minutes" gorm:"default:0"`
	Hours         uint          `json:"hours" gorm:"default:0"`
	UserID        uint          `json:"UserID"`
	User          UserModel     `json:"user" gorm:"foreignKey:UserID;references:ID"`
	ImageID       uint          `json:"ImageID"`
	Image         ImageModel    `json:"image" gorm:"foreignKey:ImageID;references:ID"`
}

type CreateDashboardModel struct {
	Name     string `json:"name" validate:"required"`
	Category string `json:"category" validate:"required"`
}

type UpdateDashboardModel struct {
	Name string `json:"name" validate:"required"`
}

type UintSlice []uint

func (u UintSlice) Value() (driver.Value, error) {
	return json.Marshal(u)
}

func (u *UintSlice) Scan(value interface{}) error {
	return json.Unmarshal(value.([]byte), u)
}

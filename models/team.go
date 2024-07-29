package models

import (
	"database/sql/driver"
	"encoding/json"

	"gorm.io/gorm"
)

type TeamModel struct {
	gorm.Model
	Name        string        `json:"name" gorm:"type:varchar(40);not null"`
	Points      []PointModel  `json:"points" gorm:"foreignKey:TeamID;constraint;OnDelete:CASCADE"`
	Games       JSONUIntArray `json:"games" gorm:"type:json"`
	Sets        JSONUIntArray `json:"sets" gorm:"type:json"`
	DashboardID uint          `json:"dashboard_id"`
	ImageID     uint          `json:"ImageID"`
	Image       ImageModel    `json:"image" gorm:"foreignKey:ImageID;references:ID"`
}

type UpdateTeamModel struct {
	Name string `json:"name" validate:"required"`
}

type JSONUIntArray []uint

func (a JSONUIntArray) Value() (driver.Value, error) {
	if len(a) == 0 {
		return json.Marshal([]uint{})
	}
	return json.Marshal(a)
}

func (a *JSONUIntArray) Scan(value interface{}) error {
	if value == nil {
		*a = JSONUIntArray{}
		return nil
	}
	return json.Unmarshal(value.([]byte), a)
}

func (d *TeamModel) BeforeCreate(tx *gorm.DB) (err error) {
	if d.Games == nil {
		d.Games = JSONUIntArray{}
	}

	if d.Sets == nil {
		d.Sets = JSONUIntArray{}
	}

	if d.Points == nil {
		d.Points = []PointModel{}
	}

	return
}

func (d *TeamModel) BeforeUpdate(tx *gorm.DB) (err error) {
	if d.Games == nil {
		d.Games = JSONUIntArray{}
	}

	if d.Sets == nil {
		d.Sets = JSONUIntArray{}
	}

	if d.Points == nil {
		d.Points = []PointModel{}
	}

	return
}

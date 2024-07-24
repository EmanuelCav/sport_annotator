package models

import "gorm.io/gorm"

type RoleModel struct {
	gorm.Model
	Role string `json:"role" gorm:"type:varchar(10);unique;not null"`
}

type CreateRoleModel struct {
	Role string `json:"role" validate:"required"`
}

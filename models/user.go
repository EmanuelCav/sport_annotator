package models

import "gorm.io/gorm"

type UserModel struct {
	gorm.Model
	Username string    `json:"username" gorm:"type:varchar(30);unique;not null"`
	Email    string    `json:"email" gorm:"type:varchar(255);unique"`
	Password string    `json:"password" gorm:"not null"`
	Status   bool      `json:"status" gorm:"default:false"`
	Role     RoleModel `json:"role"`
	RoleID   uint      `json:"roleId"`
}

type CreateUserModel struct {
	Username string `json:"username" validate:"required"`
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
	Confirm  string `json:"confirm" validate:"required"`
	Role     string `json:"role"`
}

type LoginModel struct {
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
}

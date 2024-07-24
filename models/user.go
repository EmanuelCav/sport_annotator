package models

import "gorm.io/gorm"

type UserModel struct {
	gorm.Model
	Username string    `json:"username" gorm:"type:varchar(30);unique;not null"`
	Email    string    `json:"email" gorm:"not null;unique"`
	Password string    `json:"password" gorm:"not null"`
	Status   bool      `json:"status" gorm:"default:true"`
	Role     RoleModel `json:"role"`
	RoleID   uint      `json:"roleId"`
}

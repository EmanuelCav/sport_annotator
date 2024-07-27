package validation

import (
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/helper"
	"github.com/EmanuelCav/sport_annotator/models"
)

func RoleValid(role models.CreateRoleModel) string {

	var roleValid models.RoleModel

	if err := database.Db.Where("role = ?", role.Role).First(&roleValid); err.Error == nil {
		return "Role already exists"
	}

	if !helper.ValidateUppercase(role.Role) {
		return "Role only accepts uppercase letters"
	}

	return ""

}

func RegisterValid(user models.CreateUserModel) string {

	var userValid models.UserModel

	if len(user.Password) <= 5 {
		return "The password must has more than 5 characters"
	}

	if user.Password != user.Confirm {
		return "The passwords do not match"
	}

	if err := database.Db.Where("username = ?", user.Username).First(&userValid); err.Error == nil {
		return "The username is already taken"
	}

	if err := database.Db.Where("email = ?", user.Email).First(&userValid); err.Error == nil {
		return "The user already exists"
	}

	if !helper.ValidateUsername(user.Username) {
		return "Username only accepts letters, numbers and _ without space"
	}

	if !helper.ValidateEmail(user.Email) {
		return "Email is not valid"
	}

	return ""

}

func LoginValid(user models.LoginModel) (string, models.UserModel) {

	var userValid models.UserModel

	if err := database.Db.Where("email = ?", user.Email).First(&userValid).Select("username", "status", "id"); err.Error != nil {
		return "Fields do not match", userValid
	}

	if !helper.CompareHash(userValid.Password, user.Password) {
		return "Fields do not match", userValid
	}

	return "", userValid
}

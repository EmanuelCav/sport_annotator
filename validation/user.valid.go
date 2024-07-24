package validation

import (
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/helper"
	"github.com/EmanuelCav/sport_annotator/models"
)

func RoleValid(role models.RoleModel) string {

	var roleValid models.RoleModel

	if err := database.Db.Where("role = ?", role.Role).First(&roleValid); err.Error == nil {
		return "Role already exists"
	}

	if !helper.ValidateUppercase(role.Role) {
		return "Role only accepts uppercase letters"
	}

	return ""

}

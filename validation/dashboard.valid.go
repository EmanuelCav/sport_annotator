package validation

import (
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/helper"
	"github.com/EmanuelCav/sport_annotator/models"
)

func CategoryValid(category models.CategoryModel) string {

	var categoryValid models.CategoryModel

	if err := database.Db.Where("category = ?", category.Category).First(&categoryValid); err.Error == nil {
		return "Category already exists"
	}

	if !helper.ValidateUppercase(category.Category) {
		return "Category only accepts uppercase letters"
	}

	return ""

}

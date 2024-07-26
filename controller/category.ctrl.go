package controller

import (
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/helper"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/EmanuelCav/sport_annotator/validation"
	"github.com/gofiber/fiber/v2"
)

func Categories(c *fiber.Ctx) error {

	var categories []models.CategoryModel

	if err := database.Db.Find(&categories); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error.Error(),
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"categories": categories,
	})

}

func CreateCategory(c *fiber.Ctx) error {

	var createCategory models.CreateCategoryModel

	if err := c.BodyParser(&createCategory); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	if err := helper.Validate().Struct(&createCategory); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "There are empty field. Please complete",
		})
	}

	if err := validation.CategoryValid(createCategory); err != "" {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err,
		})
	}

	category := models.CategoryModel{
		Category: createCategory.Category,
	}

	categorySaved := database.Db.Create(&category)

	if categorySaved.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": categorySaved.Error.Error(),
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"category": category,
		"message":  "Category created successfully",
	})

}

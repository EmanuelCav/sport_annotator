package controller

import (
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/EmanuelCav/sport_annotator/utils"
	"github.com/gofiber/fiber/v2"
)

func Images(c *fiber.Ctx) error {

	var images []models.ImageModel

	if err := database.Db.Find(&images); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error.Error(),
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"images": images,
	})

}

func CreateImage(c *fiber.Ctx) error {

	url, imageId, err := utils.FormData(c)

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	if url == "" {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "Please upload an image",
		})
	}

	image := models.ImageModel{
		Image:   url,
		ImageId: imageId,
	}

	imageSaved := database.Db.Create(&image)

	if imageSaved.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": imageSaved.Error.Error(),
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"image":   image,
		"message": "Image created successfully",
	})

}

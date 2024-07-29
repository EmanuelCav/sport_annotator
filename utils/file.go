package utils

import (
	"context"
	"time"

	"github.com/EmanuelCav/sport_annotator/config"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
	"github.com/gofiber/fiber/v2"
)

type mediaUpload interface {
	FileUpload(file models.File) (string, string, error)
}

type media struct{}

func NewMediaUpload() mediaUpload {
	return &media{}
}

func DestroyImage(imageId string) error {

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()

	cloud, err := cloudinary.NewFromParams(config.Config()["cloud_name"], config.Config()["api_key"], config.Config()["api_secret"])

	if err != nil {
		return err
	}

	_, err2 := cloud.Upload.Destroy(ctx, uploader.DestroyParams{PublicID: imageId})

	if err2 != nil {
		return err2
	}

	return nil

}

func UploadImage(file interface{}) (string, string, error) {

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()

	cloud, err := cloudinary.NewFromParams(config.Config()["cloud_name"], config.Config()["api_key"], config.Config()["api_secret"])

	if err != nil {
		return "", "", err
	}

	upload, err2 := cloud.Upload.Upload(ctx, file, uploader.UploadParams{Folder: config.Config()["folder"]})

	if err2 != nil {
		return "", "", err2
	}

	return upload.SecureURL, upload.PublicID, nil

}

func (*media) FileUpload(file models.File) (string, string, error) {

	uploadUrl, imageId, err := UploadImage(file.File)

	if err != nil {
		return "", "", err
	}

	return uploadUrl, imageId, nil

}

func FormData(c *fiber.Ctx) (string, string, error) {

	formData, errFile := c.FormFile("file")

	if errFile != nil {
		return "", "", c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": errFile.Error(),
		})
	}

	formFile, errFile2 := formData.Open()

	if errFile2 != nil {
		return "", "", c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": errFile2.Error(),
		})
	}

	url, imageId, errUpload := NewMediaUpload().FileUpload(models.File{File: formFile})

	if errUpload != nil {
		return "", "", c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": errUpload.Error(),
		})
	}

	return url, imageId, nil
}

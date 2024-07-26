package controller

import (
	"github.com/EmanuelCav/sport_annotator/config"
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/helper"
	"github.com/EmanuelCav/sport_annotator/models"
	"github.com/EmanuelCav/sport_annotator/validation"
	"github.com/gofiber/fiber/v2"
)

func Users(c *fiber.Ctx) error {

	var users []models.UserModel

	if err := database.Db.Find(&users); err.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error.Error(),
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"users": users,
	})

}

func GenerateUser(c *fiber.Ctx) error {

	var role models.RoleModel

	if err := database.Db.Where("role = ?", config.Config()["user_role"]).First(&role); err.Error != nil {
		return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
			"message": "Role does not exists",
		})
	}

	hashedPassword := helper.HashPassword(helper.GenerateNumber())

	user := models.UserModel{
		Password: hashedPassword,
		Username: "User" + helper.GenerateNumber(),
		RoleID:   role.ID,
	}

	userSaved := database.Db.Create(&user)

	if userSaved.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": userSaved.Error.Error(),
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"user":    user,
		"token":   helper.GenerateToken(user.ID),
		"message": "Category created successfully",
	})

}

func RegisterUser(c *fiber.Ctx) error {

	var createUser models.CreateUserModel

	if err := c.BodyParser(&createUser); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	if err := helper.Validate().Struct(&createUser); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "There are empty field. Please complete",
		})
	}

	if err := validation.RegisterValid(createUser); err != "" {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err,
		})
	}

	hashedPassword := helper.HashPassword(createUser.Password)

	var role models.RoleModel

	if len(createUser.Role) > 0 {
		if err := database.Db.Where("role = ?", createUser.Role).First(&role); err.Error != nil {
			return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
				"message": "Role does not exists",
			})
		}
	} else {
		if err := database.Db.Where("role = ?", config.Config()["user_role"]).First(&role); err.Error != nil {
			return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
				"message": "Role does not exists",
			})
		}
	}

	user := models.UserModel{
		Password: hashedPassword,
		Username: createUser.Username,
		RoleID:   role.ID,
		Email:    createUser.Email,
	}

	userSaved := database.Db.Create(&user)

	if userSaved.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": userSaved.Error.Error(),
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"user":    user,
		"token":   helper.GenerateToken(user.ID),
		"message": "Check your email",
	})

}

func Login(c *fiber.Ctx) error {

	var user models.LoginModel

	if err := c.BodyParser(&user); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err.Error(),
		})
	}

	if err := helper.Validate().Struct(&user); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": "There are empty. Please complete",
		})
	}

	err2, userLoggedIn := validation.LoginValid(user)

	if err2 != "" {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{
			"message": err2,
		})
	}

	return c.Status(fiber.StatusAccepted).JSON(&fiber.Map{
		"user":  userLoggedIn,
		"token": helper.GenerateToken(userLoggedIn.ID),
	})

}

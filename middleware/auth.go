package middleware

import (
	"fmt"

	"github.com/EmanuelCav/sport_annotator/config"
	"github.com/EmanuelCav/sport_annotator/database"
	"github.com/EmanuelCav/sport_annotator/models"
	jwtware "github.com/gofiber/contrib/jwt"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func Auth() func(c *fiber.Ctx) error {
	return jwtware.New(jwtware.Config{
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"message": "Token malformed",
			})
		},
		SigningKey: jwtware.SigningKey{Key: []byte(config.Config()["jwt"])},
	})
}

func UserId(c *fiber.Ctx) uint {
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userId := claims["id"].(float64)
	return uint(userId)
}

func Admin() func(c *fiber.Ctx) error {
	return jwtware.New(jwtware.Config{
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"message": "Token malformed",
			})
		},
		SigningKey: jwtware.SigningKey{Key: []byte(config.Config()["jwt"])},
		SuccessHandler: func(c *fiber.Ctx) error {

			var user models.UserModel
			userId := UserId(c)

			if err := database.Db.Preload("Role").First(&user, userId); err.Error != nil {
				return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
					"message": "User does not exists",
				})
			}

			fmt.Println(user.Role.Role)

			if user.Role.Role != config.Config()["privilaged_role"] {
				return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
					"message": "Not authorized",
				})
			}

			return c.Next()
		},
	})
}

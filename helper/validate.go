package helper

import (
	"net/mail"
	"regexp"

	"github.com/go-playground/validator/v10"
)

func ValidateEmail(email string) bool {
	_, err := mail.ParseAddress(email)
	return err == nil
}

func ValidateUppercase(text string) bool {
	isString := regexp.MustCompile(`^[A-ZÑ\s]+$`).MatchString
	return isString(text)
}

func ValidateUsername(text string) bool {
	isString := regexp.MustCompile(`^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜ._]+$`).MatchString
	return isString(text)
}

func ValidateTitle(text string) bool {
	isString := regexp.MustCompile(`^[^<>^]+$`).MatchString
	return isString(text)
}

func Validate() *validator.Validate {
	return validator.New()
}

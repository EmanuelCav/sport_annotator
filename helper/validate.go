package helper

import (
	"regexp"

	"github.com/go-playground/validator/v10"
)

func ValidateUppercase(text string) bool {
	isString := regexp.MustCompile(`^[A-ZÑ\s]+$`).MatchString
	return isString(text)
}

func Validate() *validator.Validate {
	return validator.New()
}

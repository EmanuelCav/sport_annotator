package helper

import (
	"math/rand"
	"strconv"
)

func GenerateNumber() string {

	var password string

	for i := 0; i < 6; i++ {
		randomNumber := rand.Intn(9)
		password += strconv.Itoa(randomNumber)
	}

	return password

}

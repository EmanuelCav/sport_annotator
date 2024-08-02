package utils

func MarkersGenerator(category string) []uint {

	if category == "BASKETBALL" || category == "KICKBOXING" || category == "KARATE" {
		return []uint{1, 2, 3}
	}

	if category == "AMERICAN FOOTBALL" {
		return []uint{1, 2, 3, 6}
	}

	if category == "BOXING" {
		return []uint{8, 9, 10}
	}

	if category == "CRICKET" {
		return []uint{1, 4, 6}
	}

	if category == "TAEKWONDO" {
		return []uint{1, 2, 3, 4, 5}
	}

	if category == "RUGBY" {
		return []uint{2, 3, 5}
	}

	return []uint{1}

}

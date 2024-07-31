import { IPoint } from "@/interface/dashboard"

export const imageBlob = (image: string | Blob) => {

    if (typeof image === 'string') {
        fetch(image)
            .then(response => response.blob())
            .then(blob => {
                return URL.createObjectURL(blob);
            });
    } else {
        return URL.createObjectURL(image)
    }

    return image

}

export const calculatePoints = (points: IPoint[]): number => {

    let sum = 0

    for (let i = 0; i < points.length; i++) {
        sum += points[i].point
    }

    return sum

}

export const showPoints = (points: IPoint[]): any => {

    let sum = 0

    for (let i = 0; i < points.length; i++) {
        sum += points[i].point
    }

    if (sum === Math.pow(5, 10) + 40) {
        return 'AD'
    }

    return sum

}
import Image from "next/image"

const MainImage = () => {
    return (
        <div className="max-w-xl h-full w-full select-none flex justify-center items-center">
            <Image alt="main-image" src='/main.png' width={512} height={512} />
        </div>
    )
}

export default MainImage
import Image from "next/image"

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-full justify-center items-center z-20 flex"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <Image src="/loading.gif" alt="loading" width={100} height={100} unoptimized />
        </div>
    )
}

export default Loading
import Image from "next/image"

const InfoFooter = () => {
  return (
    <div className="p-2 flex justify-center items-center">
      <Image src='/image.png' alt='logo' width={66} height={66} />
      <p className="self-center text-xl font-semibold text-white whitespace-nowrap">Sports Scoreboard</p>
    </div>
  )
}

export default InfoFooter
import InfoImage from "./components/info/InfoImage"
import InfoText from "./components/info/InfoText"

const Info = () => {
    return (
        <div className="h-screen w-full bg-orange-100 flex justify-center items-center flex-wrap">
            <InfoImage />
            <InfoText />
        </div>
    )
}

export default Info
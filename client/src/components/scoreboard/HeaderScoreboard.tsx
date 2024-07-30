import ButtonHeader from "./components/headerScoreboard/ButtonHeader"
import Time from "./components/headerScoreboard/Time"

const HeaderScoreboard = () => {
    return (
        <div className="py-4 px-8 justify-between items-center flex w-full">
            <ButtonHeader />
            <Time />
            <ButtonHeader />
        </div>
    )
}

export default HeaderScoreboard
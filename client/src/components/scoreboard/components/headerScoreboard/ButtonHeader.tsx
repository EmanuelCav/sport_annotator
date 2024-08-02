import { ButtonHeaderPropsType } from "@/types/scoreboard.types"

const ButtonHeader = ({ Icon, func }: ButtonHeaderPropsType) => {
    return (
        <button onClick={func}
        className="p-2 bg-orange-500 rounded shadow hover:bg-orange-400 active:bg-orange-500">
            <Icon size={32} color='#ffffff' />
        </button>
    )
}

export default ButtonHeader
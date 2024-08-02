import { ButtonTimePropsType } from "@/types/scoreboard.types"

const ButtonTime = ({ disabled, func, Icon }: ButtonTimePropsType) => {
    return (
        <button onClick={func} disabled={disabled}
            className="p-2 bg-orange-500 rounded mx-4 shadow hover:bg-orange-400 active:bg-orange-500">
            <Icon size={20} color='#ffffff' />
        </button>
    )
}

export default ButtonTime
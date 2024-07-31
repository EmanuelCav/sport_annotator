import { OptionMenuDashboardPropsType } from '@/types/scoreboard.types'

const OptionMenuDashboard = ({ text, func, color }: OptionMenuDashboardPropsType) => {
    return (
        <li>
            <p className={`block px-4 cursor-pointer py-2 text-sm text-${color}-600 hover:bg-gray-100 active:bg-white`} onClick={func}>
                {text}
            </p>
        </li>
    )
}

export default OptionMenuDashboard
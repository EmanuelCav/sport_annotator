import OptionMenuDashboard from "./components/OptionMenuDashboard"

import { OptionsMenuDashboardType } from "@/types/scoreboard.types"

const OptionsMenuDashboard = ({ handleRemove }: OptionsMenuDashboardType) => {
    return (
        <div className="absolute top-10 border border-orange-200 border-solid right-3 z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2">
                <OptionMenuDashboard func={() => { }} text="Edit" color="gray" />
                <OptionMenuDashboard func={handleRemove} text="Delete" color="red" />
            </ul>
        </div>
    )
}

export default OptionsMenuDashboard
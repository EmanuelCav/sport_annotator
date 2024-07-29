import { useState } from "react"

import { IDashboard } from "@/interface/dashboard"

import MenuDashboard from "./components/MenuDashboard"
import InfoDashboard from "./components/InfoDashboard"
import OptionsMenuDashboard from "./components/OptionsMenuDashboard"

const Dashboard = ({ dashboard }: { dashboard: IDashboard }) => {

  const [isMenuDashboard, setIsMenuDashboard] = useState<boolean>(false)

  const handleMenu = () => {
    setIsMenuDashboard(!isMenuDashboard)
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <MenuDashboard handleMenu={handleMenu} />
        {
          isMenuDashboard && <OptionsMenuDashboard />
        }
      </div>
      <InfoDashboard />
    </div>

  )
}

export default Dashboard
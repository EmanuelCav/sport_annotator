import { useState } from "react"

import MenuDashboard from "./components/MenuDashboard"
import InfoDashboard from "./components/InfoDashboard"
import OptionsMenuDashboard from "./components/OptionsMenuDashboard"

import { DashboadPropsType } from "@/types/scoreboard.types"

const Dashboard = ({ dashboard, router }: DashboadPropsType) => {

  const [isMenuDashboard, setIsMenuDashboard] = useState<boolean>(false)

  const handleMenu = () => {
    setIsMenuDashboard(!isMenuDashboard)
  }

  const redirectDashboard = () => {
    router.push(`/scoreboards/${dashboard.ID}`)
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 cursor-pointer rounded-lg shadow hover:shadow-lg active:shadow" onClick={redirectDashboard}>
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
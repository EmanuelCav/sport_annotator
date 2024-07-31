import { useState } from "react"

import MenuDashboard from "./components/MenuDashboard"
import InfoDashboard from "./components/InfoDashboard"
import OptionsMenuDashboard from "./components/OptionsMenuDashboard"
import Sure from "../general/Sure"
import UpdateDashboard from "../general/UpdateDashboard"

import { removeDashboardApi } from "@/server/api/dashboard.api"

import { DashboadPropsType } from "@/types/scoreboard.types"

const Dashboard = ({ dashboard, router, removeDashboard, token }: DashboadPropsType) => {

  const [isMenuDashboard, setIsMenuDashboard] = useState<boolean>(false)
  const [isRemoveDashboard, setIsRemoveDashboard] = useState<boolean>(false)
  const [isUpdateDashboard, setIsUpdateDashboard] = useState<boolean>(false)

  const handleRemove = () => {
    setIsRemoveDashboard(!isRemoveDashboard)
    setIsMenuDashboard(false)
  }

  const handleUpdate = () => {
    setIsUpdateDashboard(!isUpdateDashboard)
    setIsMenuDashboard(false)
  }

  const remove = async () => {
    await removeDashboardApi(dashboard.ID!, token)
    removeDashboard(dashboard.ID!)
  }

  const handleMenu = () => {
    setIsMenuDashboard(!isMenuDashboard)
  }

  const redirectDashboard = () => {
    router.push(`/scoreboards/${dashboard.ID}`)
  }

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow">
      {
        isRemoveDashboard && <Sure action={remove} text="remove" handleRemove={handleRemove} />
      }
      {
        isUpdateDashboard && <UpdateDashboard handleUpdate={handleUpdate} dashboard={dashboard} />
      }
      <div className="flex relative justify-end px-1 pt-4 flex-col border border-orange-300">
        <MenuDashboard handleMenu={handleMenu} />
        {
          isMenuDashboard && <OptionsMenuDashboard handleRemove={handleRemove} handleUpdate={handleUpdate} />
        }
        <div className="hover:shadow hover:shadow-orange-200 cursor-pointer active:shadow h-full w-full" onClick={redirectDashboard}>
          <InfoDashboard dashboard={dashboard} />
        </div>
      </div>
    </div>

  )
}

export default Dashboard
'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation';

import Menu from "./components/actionsHeader/Menu"
import OptionButton from "./components/actionsHeader/OptionButton"

const ActionsHeader = () => {

    const router = useRouter()

    const [isMenu, setIsMenu] = useState<boolean>(false)

    const handleOptions = () => {
        setIsMenu(!isMenu)
    }

    const handleAccount = () => {
        router.push('/account')
    }

    return (
        <div className="flex items-center flex-row justify-beetween lg:order-2">
            {/* <button className='bg-white hover:bg-orange-100 active:bg-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Options</button> */}
            {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-orange-500 rounded-lg lg:hidden hover:bg-orange-100 focus:outline-none>
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button> */}

            <OptionButton handleOptions={handleOptions} />

            {
                isMenu && <Menu handleAccount={handleAccount} />
            }
        </div >
    )
}

export default ActionsHeader
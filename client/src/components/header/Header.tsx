'use client'

import { usePathname } from 'next/navigation'

import ActionsHeader from "./components/ActionsHeader"
import AuthButton from "./components/AuthButton"
import Logo from "./components/Logo"
import Navigation from "./components/Navigation"

import { userStore } from "@/server/store/user.store"

const Header = () => {

    const { isLoggedIn } = userStore()

    const pathname = usePathname()

    return (
        <div className="bg-amber-500 border-amber-200 px-4 lg:px-6">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Logo isLoggedIn={isLoggedIn} />
                {
                    isLoggedIn ? <>
                        <ActionsHeader />
                        <Navigation />
                    </> : <>
                        {
                            pathname === '/auth' ? <></> : <AuthButton />
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default Header
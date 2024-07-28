import ActionsHeader from "./components/ActionsHeader"
import Logo from "./components/Logo"
import Navigation from "./components/Navigation"

const Header = () => {
    return (
        <div className="bg-amber-500 border-amber-200 px-4 lg:px-6 py-2.5 dark:bg-amber-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Logo />
                <ActionsHeader />
                <Navigation />
            </div>
        </div>
    )
}

export default Header
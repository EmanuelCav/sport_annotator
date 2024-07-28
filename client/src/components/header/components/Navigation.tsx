import NavLink from './components/navigation/NavLink';

const Navigation = () => {
    return (
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium navigation-contain lg:flex-row lg:space-x-8 lg:mt-0">
                <NavLink href='/scoreboards' text='Scoreboards' />
                <NavLink href='/create' text='New Scoreboard' />
            </ul>
        </div>
    )
}

export default Navigation
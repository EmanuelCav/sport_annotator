import Link from 'next/link';

const Navigation = () => {
    return (
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium navigation-contain lg:flex-row lg:space-x-8 lg:mt-0">
                <li className='navigation-section'>
                    <Link href="/scoreboards" className="block text-lg py-2 pr-4 pl-3 text-white dark:text-white" aria-current="page">Scoreboards</Link>
                </li>
                <li className='navigation-section '>
                    <Link href="/create" className=" sparkle u-hover--sparkle block text-lg py-2 pr-4 pl-3 text-white dark:text-white">New Scoreboard</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
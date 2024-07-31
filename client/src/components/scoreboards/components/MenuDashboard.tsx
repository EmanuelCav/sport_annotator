
const MenuDashboard = ({ handleMenu }: { handleMenu: () => void }) => {
    return (
        <button className="inline-block absolute top-2 right-3 text-gray-500 hover:bg-gray-100 focus:outline-none rounded-lg text-sm p-1.5" onClick={handleMenu}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
        </button>
    )
}

export default MenuDashboard
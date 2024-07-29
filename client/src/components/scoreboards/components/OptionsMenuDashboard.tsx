
const OptionsMenuDashboard = () => {
    return (
        <div className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</a>
                </li>
            </ul>
        </div>
    )
}

export default OptionsMenuDashboard
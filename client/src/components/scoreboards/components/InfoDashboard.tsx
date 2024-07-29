
const InfoDashboard = () => {
    return (
        <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900">Bonnie Green</h5>
            <span className="text-sm text-gray-500">Visual Designer</span>
            <div className="flex mt-4 md:mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none">Add friend</a>
                <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10">Message</a>
            </div>
        </div>
    )
}

export default InfoDashboard

const OptionButton = ({ handleOptions }: { handleOptions: () => void }) => {
    return (
        <button onClick={handleOptions}
            className="text-orange-500 bg-white hover:bg-orange-100 active:bg-white focus:outline-none font-medium rounded-lg text-md px-4 py-2 text-center inline-flex items-center">
            Options
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
        </button>
    )
}

export default OptionButton
import OptionMenu from "./components/OptionMenu"

const Menu = ({ handleAccount }: { handleAccount: () => void }) => {
    return (
        <div className="z-10 absolute top-16 border-orange-200 border-2 border-solid bg-white divide-y divide-orange-100 rounded-lg shadow w-44 p-2">
            <ul className="py-1 text-md border-b my-1 border-solid border-gray-200 text-gray-700">
                <OptionMenu href="/settings" text="Settings" />
            </ul>
            <button onClick={handleAccount} className="block py-2 px-4 bg-green-500 rounded hover:bg-green-400 active:bg-green-500 text-md text-white font-semibold w-full">
                Account
            </button>
        </div>
    )
}

export default Menu
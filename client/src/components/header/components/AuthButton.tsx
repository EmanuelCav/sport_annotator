import Link from "next/link"

const AuthButton = () => {
    return (
        <Link href="/auth">
            <button className="text-orange-500 bg-white hover:bg-orange-100 active:bg-white focus:outline-none font-medium rounded-lg text-md px-4 py-2 text-center inline-flex items-center">
                Log in
            </button>
        </Link>
    )
}

export default AuthButton
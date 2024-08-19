import Link from "next/link"

const NavFooter = () => {
    return (
        <div className="p-2 flex justify-center items-center flex-col">
            <Link href="/scoreboards" className="text-white my-2 hover:underline">Scoreboards</Link>
            <Link href="/create" className="text-white my-2 hover:underline">New scoreboard</Link>
        </div>
    )
}

export default NavFooter
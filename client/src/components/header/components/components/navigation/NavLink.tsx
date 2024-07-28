import Link from "next/link"

import { NavLinkPropsType } from "@/types/header.types"

const NavLink = ({ href, text }: NavLinkPropsType) => {
    return (
        <li>
            <Link href={href} className="block text-lg font-semibold py-2 pr-4 pl-3 text-white" aria-current="page">
                {text}
            </Link>
        </li>
    )
}

export default NavLink
import { NavLinkPropsType } from "@/types/header.types"

const OptionMenu = ({ href, text }: NavLinkPropsType) => {
    return (
        <li>
            <a href={href} className="block px-4 py-2 hover:bg-gray-100">{text}</a>
        </li>
    )
}

export default OptionMenu
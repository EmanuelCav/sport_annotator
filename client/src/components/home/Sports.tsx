import Sport from "./components/sports/Sport"

import { ICategory } from "@/interface/dashboard"

const Sports = ({ categories }: { categories: ICategory[] }) => {
    return (
        <div className="h-screen mx-auto max-w-6xl w-full flex justify-center items-center flex-wrap">
            {
                categories.map((category, index) => {
                    return <Sport category={category} key={index} />
                })
            }
        </div>
    )
}

export default Sports
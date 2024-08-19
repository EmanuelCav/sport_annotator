import { ICategory } from "@/interface/dashboard"

const Sport = ({ category }: { category: ICategory }) => {
    return (
        <div>
            <p>{category.category}</p>
        </div>
    )
}

export default Sport
import { ICategory } from '@/interface/dashboard'
import { SelectFormPropsType } from '@/types/general.types'

const SelectForm = ({ register, errors, data }: SelectFormPropsType) => {
    return (
        <div className="mb-4 mt-2">
            <label className="block text-amber-500 text-md font-bold mb-2" htmlFor="category">
                Select a sport
            </label>
            <select {...register(`category`)} className={errors ? "shadow border rounded w-full p-3 text-gray-700 leading-tight border border-red-500 border-solid focus:outline-none focus:shadow-outline"
                : "shadow border rounded w-full p-3 text-gray-700 leading-tight input-form focus:outline-none focus:shadow-outline"}>
                <option value=""></option>
                {
                    data.map((value: ICategory, index: number) => {
                        return <option value={value.category} key={index}>{value.category}</option>
                    })
                }
            </select>
            {
                errors && <p className="text-red-500 text-xs italic mt-2">{errors.message}</p>
            }
        </div>
    )
}

export default SelectForm
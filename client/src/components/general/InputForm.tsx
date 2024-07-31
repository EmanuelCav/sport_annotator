import { InputFormPropsType } from "@/types/general.types"

const InputForm = ({ autoFocus, text, type, max, autoComplete, register, errors, value }: InputFormPropsType) => {
    return (
        <div className="mb-4 mt-2 w-full">
            <label className="block text-amber-500 text-md font-bold mb-2" htmlFor={text}>
                {text.charAt(0).toUpperCase() + text.slice(1, text.length)}
            </label>
            <input value={value} {...register(`${text}`, { required: true })}
                className={errors ? "shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight border border-red-500 border-solid focus:outline-none focus:shadow-outline"
                    : "shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight input-form focus:outline-none focus:shadow-outline"}
                id={text} type={type} placeholder={text.charAt(0).toUpperCase() + text.slice(1, text.length)} autoFocus={autoFocus} maxLength={max} autoComplete={autoComplete} />
            {
                errors && <p className="text-red-500 text-xs italic mt-2">{errors.message}</p>
            }
        </div>
    )
}

export default InputForm
import { PassedProps } from "@/interfaces/PassedPropsToForm";

const Input = ({ data , touched , error , value, onChange, onBlur} :PassedProps ) => {
    
    const {name , placeholder, label , type} = data;
    return <>
    <div className="mb-3">
    <label className="block text-start text-gray-700 text-sm font-bold mb-2  " htmlFor={name}>{label}</label>
    <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 " value={value} onChange={onChange} onBlur={onBlur} type={type}  placeholder={placeholder} name={name}/>
    {touched && error && <p>{error}</p>}
    </div>
    
    </>
}

export default Input

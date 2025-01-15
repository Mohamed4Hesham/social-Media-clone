import { PassedProps } from "@/interfaces/PassedPropsToForm";

const Input = ({ data , touched , error , value, onChange, onBlur} :PassedProps ) => {
    
    const {name , placeholder, label , type} = data;
    return <>
    <label htmlFor={name}>{label}</label>
    <input value={value} onChange={onChange} onBlur={onBlur} type={type}  placeholder={placeholder} name={name}/>
    {touched && error && <p>{error}</p>}
    </>
}

export default Input

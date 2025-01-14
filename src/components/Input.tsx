interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    name: string
}
interface PassedProps {
    data : InputProps,
    touched : boolean |undefined ,
    error : string|undefined,
    value : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void,
    onBlur : (e : React.FocusEvent<HTMLInputElement>) => void
}
const Input = ({ data , touched , error , value, onChange, onBlur} :PassedProps ) => {
    return <>
    <label htmlFor={data.name}>{data.label}</label>
    <input value={value} onChange={onChange} onBlur={onBlur} type={data.type}  placeholder={data.placeholder} name={data.name}/>
    {touched && error && <p>{error}</p>}
    </>
}

export default Input

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    name: string
}
 export interface PassedProps {
    data : InputProps,
    touched : boolean |undefined ,
    error : string|undefined,
    value : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void,
    onBlur : (e : React.FocusEvent<HTMLInputElement>) => void
}
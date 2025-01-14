import Input from "@/components/Input"
import { handleSignup } from "@/redux/slices/UserSlice"
import {useFormik} from 'formik'
import { useDispatch } from "react-redux"
import * as yup from 'yup'
const Inputs =[
    {
        label:'name',
        type:'text',
        placeholder:'name',
        name:'name'
    },
    {
        label:'email',
        type:'text',
        placeholder:'email',
        name:'email'
    },
    {
        label:'password',
        type:'password',
        placeholder:'password',
        name:'password'
    },
    {
        label:'rePassword',
        type:'password',
        placeholder:'rePassword',
        name:'rePassword'
    }
    
]
const Register = () => {
    const dispatch = useDispatch();
    
    const validationSchema = yup.object({
        name: yup.string().min(2,'The entered name is too short ').max(20,'The entered name is too long').required('The name is required'),
        email: yup.string().email('The entered email is not valid').required('The email is required'),
        password: yup.string().min(6,'The entered password is too short').max(20,'The entered password is too long').required('The password is required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'The entered password is not valid'),
        rePassword: yup.string().oneOf([yup.ref('password')],'The entered password and rePassword are not matching').required('The rePassword is required'), 
    })
    const formikValues = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            gender:'',
            dateOfBirth:'',
        },
        onSubmit: (values)=>{
            const res = dispatch(handleSignup(values));
            console.log(res)
        },
        validationSchema,
})
    return <>
    <form onSubmit={formikValues.handleSubmit} className="flex flex-col mb-2">
        {Inputs.map((input , index) => <Input
        key={index}
        data = {input}
        touched={formikValues.touched[input.name as keyof typeof formikValues.touched]}
        error ={formikValues.errors[input.name as keyof typeof formikValues.errors]}
        value={formikValues.values[input.name as keyof typeof formikValues.values]}
        onBlur={formikValues.handleBlur} 
        onChange={formikValues.handleChange}
        />
        )}
        <label htmlFor="gender"></label>
        <select defaultValue={`male`} value={formikValues.values.gender} onChange={formikValues.handleChange} onBlur={formikValues.handleBlur} name="gender" >
        <option value="male">male</option>
        <option value="female">female</option>
        </select>
        <label htmlFor="dateOfBirth">Date Of Birth</label>
        <input type="date" name="dateOfBirth" value={formikValues.values.dateOfBirth} onChange={formikValues.handleChange} onBlur={formikValues.handleBlur} />
        <button type="submit">Register</button>
    </form>
    </>
}

export default Register



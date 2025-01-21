import Input from '@/components/Dynamic input/Input';
import { ChangePasswordRes } from '@/interfaces/changePasswordRes';
import { resetPassword } from '@/redux/slices/UserSlice';
import { AppDispatch } from '@/redux/Store';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import * as yup from "yup";

const Inputs = [
    {
        label: "Password",
        type: "password",
        placeholder: "password",
        name: "password",
    },
    {
        label: "New Password",
        type: "password",
        placeholder: "password",
        name: "newPassword",
    },
]
const ChangePassword = () => {
    const dispatch : AppDispatch = useDispatch();
    const validationSchema = yup.object({
        password: yup
        .string()
        .min(6, "The entered password is too short")
        .max(20, "The entered password is too long")
        .required("The password is required")
        .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "The entered password is not valid"
        ),
        newPassword: yup
        .string()
        .min(6, "The entered password is too short")
        .max(20, "The entered password is too long")
        .required("The password is required")
        .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "The entered password is not valid"
        )
    })
    const formik = useFormik({
        initialValues: {
            password: "",
            newPassword: "",
        },
        validationSchema: validationSchema,
        onSubmit:async (values) => {
            try{
                const response :ChangePasswordRes = await dispatch(resetPassword(values)).unwrap();
                if (response.message === "success") {
                    toast.success("Password has changed successfully !!", { duration: 2000 });
                    
            }else if(response.error){
                toast.error(response.error, { duration: 2000 });
            }
            }catch(error){
                toast.error(`An error occurred : ${error}`, { duration: 5000 });
            }
            
        },
    })
    return (
    <div className="container flex flex-col justify-center items-center mx-auto h-screen p-2">
        <form className='w-full max-w-sm mx-auto bg-white p-8 rounded-xl shadow-2xl' onSubmit={formik.handleSubmit}>
                {Inputs.map((input , index) => (
                <Input key={index}
                data={input}
                value={formik.values[input.name as keyof typeof formik.values]}
                touched={formik.touched[input.name as keyof typeof formik.touched]} 
                error={formik.errors[input.name as keyof typeof formik.errors]} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}  />
                ))}
            <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-xl hover:bg-indigo-600 transition duration-300"
            type="submit"
            >Change Password</button>        
        </form>
    </div>

    )
}

export default ChangePassword

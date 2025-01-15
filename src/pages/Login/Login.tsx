import Input from "@/components/Input";
import * as yup from "yup";
import { Loader } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleSignin, userSliceActions } from "@/redux/slices/UserSlice";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { LoginForm } from "@/interfaces/LoginForm";
import {Helmet} from 'react-helmet'


const Inputs = [
    {
    label: "Email",
    type: "text",
    placeholder: "email",
    name: "email",
    },
    {
    label: "Password",
    type: "password",
    placeholder: "password",
    name: "password",
    },
    ];

const Login = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = yup.object({
    email: yup
        .string()
        .email("The entered email is not valid")
        .required("The email is required"),
    password: yup
        .string()
        .min(6, "The entered password is too short")
        .max(20, "The entered password is too long")
        .required("The password is required")
        .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "The entered password is not valid"
        ),
    });

    const formikValues = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: LoginForm) => {
        try{
            setIsLoading(true);
            const response = await dispatch(handleSignin(values));
            console.log(response);
            if (response.payload.message === "success") {
                setIsLoading(false);
                const res =  userSliceActions.setToken(response.payload.token); 
                toast.success("Successfully logged in!", { duration: 2000 });
                localStorage.setItem("SocialMediaToken", response.payload.token);
                console.log(res);
                navigate("/home");
            }
            else if(response.payload.error){
                setIsLoading(false);
                toast.error(response.payload.error)  
            }
        }   
        catch(error){
            setIsLoading(false);
            toast.error("An error occurred");
        }
        finally{
            setIsLoading(false);
        }
    },
    }); 
    
    return <>

            <Helmet>
                <title>Login </title>
                <meta name="description" content="Login to your fav social media platform" />
            </Helmet>
            
    <form onSubmit={formikValues.handleSubmit}>
        {Inputs.map((input, index) => (
        <Input
            key={index}
            data={input}
            touched={formikValues.touched[input.name as keyof LoginForm]}
            error={formikValues.errors[input.name as keyof LoginForm]} 
            value={formikValues.values[input.name   as keyof LoginForm]}
            onChange={formikValues.handleChange}
            onBlur={formikValues.handleBlur}
        />
        ))}

        <div className="flex flex-col">
        <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-xl hover:bg-indigo-600 transition duration-300"
            type="submit"
        >
            {!isLoading ? (
            "login"
            ) : (
            <Loader className="animate-spin w-4 h-4 inline" />
            )}
        </button>
        <span>
            
            Don't have an account ?
            <Link className="underline font-bold  " to={"/register"}>
            
            Sign up now
            </Link>
        </span>
        </div>
    </form>
    </>
}

export default Login

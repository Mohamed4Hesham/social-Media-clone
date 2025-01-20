import * as yup from "yup";
import { Loader } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleSignin, userSliceActions } from "@/redux/slices/UserSlice";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { LoginForm } from "@/interfaces/LoginForm";
import Input from "@/components/Dynamic input/Input";
import { Helmet } from "react-helmet-async";
import { AppDispatch } from "@/redux/Store";
import { LoginRes } from "@/interfaces/LoginResponse";
import Cookies from 'js-cookie'

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
    const dispatch :AppDispatch   = useDispatch();
    const navigate = useNavigate();

    //validation schema using yup
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

    //form handling using formik integrated with yup for real time validation
    const formikValues = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: LoginForm) => {
        try{
            setIsLoading(true);
            const response :LoginRes  = await  dispatch(handleSignin(values)).unwrap();
            console.log(response);
            if (response.message === "success") {
                setIsLoading(false);
                const res =  dispatch(userSliceActions.setToken(response.token));
                toast.success("Successfully logged in!", { duration: 2000 });
                Cookies.set("SocialMediaToken",response.token as string); 
                console.log(res);
                navigate("/");
            }
            else if(response.error){
                setIsLoading(false);
                toast.error(response.error)  
            }
        }   
        catch(error){
            setIsLoading(false);
            toast.error(`An error occurred : ${error}`);
        }
        finally{
            setIsLoading(false);
        }
    },
    }); 
    
    return <>
        {/* helmet to provide metadata to the page  to get our app seo friendly*/}
        <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Login to our social media app , MM11" />
        <link rel="canonical" href="https://example.com" />
        </Helmet>
            
    <form onSubmit={formikValues.handleSubmit}>
        {Inputs.map((input, index) => (
        <Input
            key={index}
            data={input}
            touched={formikValues.touched[input.name as keyof  LoginForm]}
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
            "Login"
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

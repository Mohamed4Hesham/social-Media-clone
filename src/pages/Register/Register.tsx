import Input from "@/components/Input";
import { handleSignup } from "@/redux/slices/UserSlice";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import React from "react";
import { Loader } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
const Inputs = [
{
label: "Name",
type: "text",
placeholder: "name",
name: "name",
},
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
{
label: "Confirm password",
type: "password",
placeholder: "rePassword",
name: "rePassword",
},
];
const Register = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const [isLoading, setIsLoading] = React.useState(false);

// Validation schema from yup
const validationSchema = yup.object({
name: yup
    .string()
    .min(2, "The entered name is too short ")
    .max(20, "The entered name is too long")
    .required("The name is required"),
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
rePassword: yup
    .string()
    .oneOf(
    [yup.ref("password")],
    "The entered password and rePassword are not matching"
    )
    .required("The rePassword is required"),
});

// Formik configuration object
const formikValues = useFormik({
initialValues: {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    gender: "",
    dateOfBirth: "",
},
onSubmit: async (values) => {
    try {
    setIsLoading(true);
    const response = await dispatch(handleSignup(values));
    if (response.payload.message === "success") {
        toast.success("Successfully created!", { duration: 2000 });
        navigate("/login");
        setIsLoading(false);
    } else if (response.payload.error) {
        toast.error(response.payload.error, { duration: 2000 });
        setIsLoading(false);
    }
    } catch (error) {
        setIsLoading(true);
    } finally {
    setIsLoading(false);
    }
},
validationSchema,
});
return (
<>
    '
    <Helmet>
    <title>Register</title>
    <meta name="description" content="Nested component" />
    </Helmet>
    '
    <div className=" container mx-auto p-2 ">
    <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
    <form
        onSubmit={formikValues.handleSubmit}
        className="   w-full max-w-sm mx-auto bg-white p-8 rounded-xl shadow-2xl "
    >
        {Inputs.map((input, index) => (
        <Input
            key={index}
            data={input}
            touched={
            formikValues.touched[
                input.name as keyof typeof formikValues.touched
            ]
            }
            error={
            formikValues.errors[
                input.name as keyof typeof formikValues.errors
            ]
            }
            value={
            formikValues.values[
                input.name as keyof typeof formikValues.values
            ]
            }
            onBlur={formikValues.handleBlur}
            onChange={formikValues.handleChange}
        />
        ))}

        <div className="mb-3">
        <label
            htmlFor="gender"
            className="block text-start text-gray-700 text-sm font-bold mb-2"
        >
            Gender
        </label>
        <select
            id="gender"
            name="gender"
            value={formikValues.values.gender}
            onChange={formikValues.handleChange}
            onBlur={formikValues.handleBlur}
            className="w-full px-3 py-2  border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 "
        >
            <option className="w-1/2 h-1/3" value="" disabled>
            Select Gender
            </option>
            <option className="w-1/2 h-1/3" value="male">
            Male
            </option>
            <option className="w-1/2 h-1/3" value="female">
            Female
            </option>
        </select>
        {formikValues.touched.gender && formikValues.errors.gender && (
            <p className="mt-2 text-sm text-red-600">
            {formikValues.errors.gender}
            </p>
        )}
        </div>
        <div className="mb-3">
        <label
            className="block text-start text-gray-700 text-sm font-bold mb-2"
            htmlFor="dateOfBirth"
        >
            Date Of Birth
        </label>
        <input
            className="w-full px-3 text-sm md:text-lg py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 "
            type="date"
            name="dateOfBirth"
            value={formikValues.values.dateOfBirth}
            onChange={formikValues.handleChange}
            onBlur={formikValues.handleBlur}
        />
        </div>
        <div className="flex flex-col">
        <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-xl hover:bg-indigo-600 transition duration-300"
            type="submit"
        >
            {!isLoading ? (
            "Register"
            ) : (
            <Loader className="animate-spin w-4 h-4 inline" />
            )}
        </button>
        <span>
            {" "}
            Already have an account ?
            <Link className="underline font-bold  " to={"/login"}>
            {" "}
            Login now
            </Link>
        </span>
        </div>
    </form>
    </div>
</>
);
};

export default Register;

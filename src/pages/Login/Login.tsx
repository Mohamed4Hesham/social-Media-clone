import Input from '@/components/Input'

const LoginInputs = [
    {
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        name: "email"
    },
    {
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        name: "password"
    }
]
const Login = () => {
    return <>
    {LoginInputs.map((input , index) => <Input key={index} {...input} /> )}
    </>
}

export default Login

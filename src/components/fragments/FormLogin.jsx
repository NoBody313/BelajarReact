import InputField from "../elements/inputField/index.jsx";
import Button from "../elements/button/index.jsx";

const FormLogin = () => {
    return (
        <form action="">
            <InputField label="Email" type="email" placeholder="example@mail.com" name="email"/>
            <InputField label="Password" type="password" placeholder="********" name="password"/>
            <Button variant="bg-blue-500" type="submit">Login</Button>
        </form>

    )
}

export default FormLogin;
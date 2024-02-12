import InputField from "../elements/inputField/index.jsx";
import Button from "../elements/button/index.jsx";

const FormRegister = () => {
    return (
        <form action="">
            <InputField label="Email" type="email" placeholder="example@mail.com" name="email"/>
            <InputField label="Username" type="text" placeholder="enter your username" name="Username"/>
            <InputField label="Password" type="password" placeholder="********" name="password"/>
            <InputField label="Verify Password" type="password" placeholder="********" name="verify password"/>
            <Button variant="bg-blue-500" type="submit">Login</Button>
        </form>
    )
}

export default FormRegister;
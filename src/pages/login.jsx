import FormLogin from "../components/fragments/FormLogin.jsx";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="flex w-screen min-h-screen justify-center items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-700">Login</h1>
                <p className="capitalize font-medium text-slate-500 mb-8">Welcome, Please enter your detail</p>
                <FormLogin/>
                <p className="text-center mt-4 capitalize">Belum punya akun?
                    <Link to={`/register`} className="font-medium text-blue-600"> Daftar disini!</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;
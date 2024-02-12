import FormRegister from "../components/fragments/FormRegister.jsx";
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className="flex w-screen min-h-screen justify-center items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-700">Register</h1>
                <p className="capitalize font-medium text-slate-500 mb-8">Welcome, Please create your account first!</p>
                <FormRegister/>
                <p className="text-center mt-4 capitalize">Sudah punya akun?
                    <Link to={`/login`} className="font-medium text-blue-600"> Login sekarang!</Link>
                </p>
            </div>
        </div>
    )
}

export default Register;
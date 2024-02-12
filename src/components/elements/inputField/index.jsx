import Label from "./Label.jsx";
import Input from "./Input.jsx";

const InputField = (props) => {
    // eslint-disable-next-line react/prop-types
    const {label, type, name, placeholder} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default InputField;
const Input = (props) => {
    // eslint-disable-next-line react/prop-types
    const {type, placeholder, name} = props;

    return (
        <input
            type={type}
            className="block w-full text-sm font-normal text-slate-700 outline outline-2 outline-blue-500 rounded-md p-3 placeholder:opacity-50"
            placeholder={placeholder}
            name={name}
            id={name}
            autoComplete="true"
        />
    )
}

export default Input;
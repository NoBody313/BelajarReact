const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children, variant, type} = props
    return (
        <button
            className={`block w-full text-center px-4 py-3 ${variant} rounded-md text-white`}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button;
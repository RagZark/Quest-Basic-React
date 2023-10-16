import React from "react";

const showLabel = () => {alert(`"A label deste botão é: ${Button.defaultProps.label}"`)}

const Button = ({label}) => {
    return <button onClick={showLabel}>{label}</button>
}


Button.defaultProps = {
    label: "Clique Aqui"
}

export default Button
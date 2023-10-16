import React from "react";

const P = ({label, color}) =>{
    return <p id="text-transformed" style={{color: color}}>{label.toUpperCase()}</p>
}

P.defaultProps ={
    label: 'Imagine um texto bonito aqui',
    color: 'blue',
}

export default P
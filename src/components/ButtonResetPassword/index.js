import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom'; // ✅ Importa o hook

export default function ButtonResetPassword() {
     const navigate = useNavigate(); // ✅ Instancia o hook

    const handleClick = () => {
        navigate('/login'); // ✅ Redireciona para /login
    };
    return(
        <div>
            <button className="buttonresetpassword" onClick={handleClick}>
                 Reset your password
        </button>
        </div>
        
    )
}
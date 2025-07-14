import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom'; // ✅ Importa o hook

export default function ButtonForgotPassword() {
     const navigate = useNavigate(); // ✅ Instancia o hook

    const handleClick = () => {
        navigate('/forgotpassword'); // ✅ Redireciona para /ForgotPassword
    };

    return(
        <div>
            <button className="buttonforgotpassword" onClick={handleClick}>
                Forgot your Password?
        </button>
        </div>
        
    )
}
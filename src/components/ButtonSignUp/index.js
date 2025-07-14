import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom'; // ✅ Importa o hook

export default function ButtonSignUp() {
     const navigate = useNavigate(); // ✅ Instancia o hook

    const handleClick = () => {
        navigate('/signup'); // ✅ Redireciona para /signup
    };

    return(
        <div>
            <button className="buttonsignup" onClick={handleClick}>
                 Sign Up
        </button>
        </div>
        
    )
}
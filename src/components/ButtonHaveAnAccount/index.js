import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom'; // ✅ Importa o hook

export default function ButtonHaveAnAccount() {
     const navigate = useNavigate(); // ✅ Instancia o hook

    const handleClick = () => {
        navigate('/login'); // ✅ Redireciona para /login
    };

    return(
        <div>
            <button className="buttonhaveanaccount" onClick={handleClick}>
                Login
        </button>
        </div>
        
    )
}
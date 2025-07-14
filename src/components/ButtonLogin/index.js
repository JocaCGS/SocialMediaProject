import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom'; // ✅ Importa o hook

export default function ButtonLogin() {
     const navigate = useNavigate(); // ✅ Instancia o hook

    const handleClick = () => {
        navigate('/feed'); // ✅ Redireciona para /feed
    };
    return(
        <div>
            <button className="buttonlogin" onClick={handleClick}>
                 LOGIN
        </button>
        </div>
        
    )
}
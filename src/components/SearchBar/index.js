import React, { useState } from 'react';
import './style.css';

export default function ButtonProfile() {
    return(
        <div className='searchdiv'>
            <button className='buttonsearch'>
                <i className="bi bi-search"></i>
            </button>
            <input className='searchbox' placeholder='Search'></input>
            <button className='buttonsearch'>
                <i className="bi bi-x"></i>
            </button>
        </div>
    )
}
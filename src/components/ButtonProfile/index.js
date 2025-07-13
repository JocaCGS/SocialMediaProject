import React, { useState } from 'react';
import './style.css';

export default function ButtonProfile() {
    return(
        <div>
            <button className="buttonprofile">
                <i className="bi bi-person"></i> Profile
            </button>
        </div>
    )
}
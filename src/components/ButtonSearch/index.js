import React, { useState } from 'react';
import './style.css';

export default function ButtonMore() {
    return(
        <div>
            <button className="buttonmore">
                <i className="bi bi-search"></i> Search
            </button>
        </div>
    )
}
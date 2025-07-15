import React from 'react';
import { ConfirmPasswordInput } from './style.js';

export default function ConfirmPasswordBox() {
    return (
        <div>
            <ConfirmPasswordInput
                type="password"
                placeholder="Confirm Password"
                autoComplete="new-password" 
            />
        </div>
    );
}

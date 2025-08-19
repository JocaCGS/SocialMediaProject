import React from 'react';
import { ConfirmPasswordInput } from './style.js';

export default function ConfirmPasswordBox({ value, onChange }) {
    return (
        <div>
            <ConfirmPasswordInput
                type="password"
                placeholder="Confirm Password"
                autoComplete="new-password"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

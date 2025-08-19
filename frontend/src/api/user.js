import axios from 'axios';

const User = axios.create({
    // Exemplo de URL base
    baseURL: 'http://localhost:4000/api', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default User;
import User from './user';

export const getUsers = () => {
    return User.get('/users'); // GET /api/users
};

export const getUserById = (id) => {
    return User.get(`/users/${id}`); // GET /api/users/:id
};

export const createUser = (data) => {
    return User.post('/users', data); // POST /api/users
};

export const updateUser = (id, data) => {
    return User.put(`/users/${id}`, data); // PUT /api/users/:id
};

export const deleteUser = (id) => {
    return User.delete(`/users/${id}`); // DELETE /api/users/:id
};
    
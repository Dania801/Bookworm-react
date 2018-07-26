import axios from 'axios';

export default {
    user: {
        login: (credentials) => axios.post('/api/auth', { credentials }).then(res => res.data.user),
        signup: (credentials) => axios.post('api/signup', { credentials }).then(res => res.data.user),
        confirm: (token) => axios.post('/api/auth/confirmation', {token}).then(res => res.data.user)
    },
    books: {
        fetchAll: () => axios.get('/api/books').then(res => res.data)
    }
}
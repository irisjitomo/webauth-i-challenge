import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {

    const credentials = {
        username : '',
        password: ''
    }

    

    const [User, setUser] = useState(credentials)

    const handleChange = (e) => {
        e.persist();
        setUser({
            ...User,
            [e.target.name] : e.target.value
        })
    }

    const registeredUser = {
        username : User.username,
        password : User.password
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:7000/api/login', registeredUser)
        .then(res => {
            console.log(res.data)
            console.log(registeredUser) 
        })
        setUser(credentials)
        props.history.push('/users')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name='username'
                placeholder='username'
                value = {User.username}
                onChange={handleChange}
                />

                <input 
                type="password"
                name='password'
                placeholder='password'
                value = {User.password}
                onChange={handleChange}
                />
                <button>Login</button>

            </form>
        </div>
    )


}

export default Login;
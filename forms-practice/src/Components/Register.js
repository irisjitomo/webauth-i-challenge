import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Register = (props) => {

    const credentials = {
        username : '',
        password: ''
    }

    

    const [newUser, setNewUser] = useState(credentials)

    const handleChange = (e) => {
        e.persist();
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }

    const registeredUser = {
        username : newUser.username,
        password : newUser.password
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('http://localhost:7000/api/register', registeredUser)
        .then(res => {
            console.log(res.data)
            console.log(registeredUser) 
        })
        setNewUser(credentials)
        props.history.push('/login')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name='username'
                placeholder='username'
                value = {newUser.username}
                onChange={handleChange}
                />

                <input 
                type="password"
                name='password'
                placeholder='password'
                value = {newUser.password}
                onChange={handleChange}
                />
                <button>Register</button>

            </form>
        </div>
    )


}

export default Register;
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Users = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:7000/api/users')
        .then(res => {
          setUsers(res.data)
        })
      }, [])

    return(
        <div>
            {users.map(user => {
                return (
                    <div>
                        <h1>{user.username}</h1>
                        </div>
                )
            })}
        </div>
    )
}

export default Users;
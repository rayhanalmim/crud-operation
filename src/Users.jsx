import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);

    const handleClick = (id) =>{
        console.log(id);
        fetch(`http://localhost:3000/user/${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            const remaining = users.filter(user => user._id !== id);
            setUsers(remaining)
        })
    }

    return (
        <div>
            <h3>users</h3>
            {
                users.map(user=> <div key={user._id}>{user.name} {user.email}
                <Link to={`/user/${user._id}`}><button>Update</button></Link>
                <button onClick={()=>handleClick(user._id)}>x</button>
                </div>)
            }
        </div>
    );
};

export default Users;
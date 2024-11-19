import { useState, useEffect } from "react";
import axios from "axios";

export const Users = () => {
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.org/users");
            setUsersList(response.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return <>
        <h1>Bienvenue sur la page Utilisateur</h1>
        {
            loading ? <p>Chargement des utilisateurs</p>
                : <ul>
                    {usersList.map(user => <li key={user.id}>{user.email}</li>)}
                </ul>
        }
    </>
}
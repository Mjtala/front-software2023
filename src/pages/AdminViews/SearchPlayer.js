import React, { useState, useEffect } from 'react';
import './SearchPlayer.css';
import axios from 'axios';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

export default function SearchPlayer() {
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [data, setData] = useState([])
    console.log(data, "data")
    const data2 = [
        {
            name: "Paul",
            lastname: "Paulsen",
            password: "newpassword",
            email: "paul@gmail.com",
            type: "player",
            id: 1
        },
        {
            name: "John",
            lastname: "Johnson",
            password: "john123",
            email: "john@gmail.com",
            type: "player",
            id: 2
        },
        {
            name: "Sarah",
            lastname: "Smith",
            password: "password123",
            email: "sarah@gmail.com",
            type: "player",
            id: 3
        },
        {
            name: "Emma",
            lastname: "Brown",
            password: "emma456",
            email: "emma@gmail.com",
            type: "player",
            id: 4
        },
        {
            name: "Michael",
            lastname: "Miller",
            password: "mike789",
            email: "michael@gmail.com",
            type: "player",
            id: 5
        },
    ];

    useEffect(() => {
        async function getData() {
            try {
                const axiosConfiguration = {
                    headers: {
                        "cookie": userConnectedData,
                        withCredentials: true
                    }
                };
                const url = `${config.route}/users`
                const response = await axios.get(url, axiosConfiguration)
                setData(response.data)
            } catch (error) {
                console.log(error, "hay error");
            }
        }
        getData()
    }, [])

    return (
        <div className="MainDivListFields">
            {Array.isArray(data2) && data2.length > 0 ? (
                data2.map(user => {
                    return (
                        <div key={user.id}>
                            <h3>{user.name}</h3> <a href={`/users/${user.id}`}><button>Ver usuario</button></a>
                        </div>

                    )
                })) : (
                <div className="DivNoFields">
                    <p>No hay usuarios que mostrar</p>
                </div>
            )}
        </div>
    )
}
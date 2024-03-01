// src/Components/AllPlayers.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../API/index';

function AllPlayers() {
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
        const getPlayers = async () => {
        const allPlayers = await fetchPlayers();
        setPlayers(allPlayers);
        };
        getPlayers();
    }, []);
    
    return (
        <div>
        <h1>All Players</h1>
        <>
            {players.map((player) => (
            <>
            <li key={player.id} />
            <h4>{player.name}</h4>
            <Link to={`/player/${player.id}`}>See Details</Link>
            </>            
            ))}
        </>        
        </div>  
    );
    }

export default AllPlayers;
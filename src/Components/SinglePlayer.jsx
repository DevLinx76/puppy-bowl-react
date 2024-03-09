// src/Components/SinglePlayer.jsx

import React, { useEffect, useState } from 'react';
import { fetchPlayerById } from '../API/index';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

function SinglePlayer() {
    const [player, setPlayer] = useState(null); // Initialize player as null for conditional rendering
    const { id } = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
        const getPlayer = async () => {
            const playerData = await fetchPlayerById(id); 
            setPlayer(playerData);
        };
        getPlayer();
    }, [id]);

    const handleDelete = async () => {
        
        try {
            await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-a/players/${id}`, {
                method: 'DELETE',
            });
            navigate("/"); 
        } catch (err) {
            console.error("Failed to delete the player:", err);
        }
    };

    return player ? (
        <>
            <div>            
                <h1>Player Details</h1>
                <h4>{player.name}</h4>
                <h4>{player.position}</h4> {}
                <h4>{player.team}</h4>
                <h4>{player.number}</h4>
                <button onClick={() => navigate("/")}>Back to Players</button>
                <button onClick={handleDelete}>Delete Player</button> {/* Delete button */}
            </div>        
        </>
    ) : (
        <h1>Loading...</h1>
    );
}

export default SinglePlayer;

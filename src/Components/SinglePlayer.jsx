// src/Components/SinglePlayer.jsx

import React, { useEffect, useState } from 'react';
import { fetchPlayerById } from '../API/index';

function SinglePlayer() {
    const [player, setPlayer] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getPlayer = async () => {
            const player = await fetchPlayerById();
            setPlayer(player);
        };
        getPlayer();
    }, [id]);

    return player ? (
        <div>
            <h1>Player Details</h1>
            <h4>{player.name}</h4>
            <h4>{player.position}</h4>
            <h4>{player.team}</h4>
        </div>
    ) : (
        <h1>Loading...</h1>
    );
}

export default SinglePlayer;
    

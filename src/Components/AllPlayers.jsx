// src/Components/AllPlayers.jsx
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { fetchAllPlayers, fetchTeams, deletePlayer } from "../API";
import { Link } from "react-router-dom";

export default function AllPlayers({ setSelectedPlayer }) {
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [searchPlayers, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playerData = await fetchAllPlayers();
                setPlayers(playerData);

                const teamData = await fetchTeams();
                setTeams(teamData);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    // Example SearchBar component inside AllPlayers for simplicity
    // Consider moving this to its own file if not already done
    function SearchBarComponent({ value, onChange }) {
        return (
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search players..."
            />
        );
    }

    const handleDelete = async (id) => {
        try {
            await deletePlayer(id);
            // Refresh the players list after deletion
            const updatedPlayers = await fetchAllPlayers();
            setPlayers(updatedPlayers);
        } catch (error) {
            console.error("Failed to delete player:", error);
        }
    };

    return (
        <div>
            <h1>All Players</h1>
            <SearchBarComponent value={searchPlayers} onChange={setSearch} />
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        <Link to={`/${player.id}`}>{player.name}</Link>
                        <button onClick={() => handleDelete(player.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// src/API/index.js

// Define the API_URL constant and export the fetchPlayers and fetchPlayer functions.
const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-a/players';

// Fetch all players from the API.
export const fetchAllPlayer = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }  
    const { data } = await response.json();
    return data.players;
  } catch (error) {
    console.error('Error fetching player', error);
  }
};

// Fetch a single player by id from the API.
export const fetchPlayersById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }   
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching players', error);
  }  
};

// Create a new player in the API.
export const createPlayer = async (player) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }  
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error creating player', error);
  }
};

// Update a player in the API.
export const updatePlayer = async (player) => {
  try {
    const response = await fetch(`${API_URL}/${player.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }  
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error updating player', error);
  }
};

// Delete a player from the API.
export const deletePlayer = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }  
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error deleting player', error);
  }
};

// Fetch Teams from the API.
export const fetchTeams = async () => {
  try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-a/teams');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }  
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching teams', error);
  }
};

// src/Components/AllPlayer.jsx



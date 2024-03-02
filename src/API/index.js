// src/API/index.js

// Define the API_URL constant and export the fetchPlayers and fetchPlayer functions.
const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players';

// Define the fetchPlayers and fetchPlayer functions.
export const fetchPlayers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response body as JSON.
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching players', error);
  }  
};
// Define the fetchPlayer function.
export const fetchPlayer = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response body as JSON.
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching player', error);
  }
}


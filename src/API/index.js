// src/API/index.js


const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players';

export const fetchPlayers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching players', error);
  }  
};

export const fetchPlayer = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching player', error);
  }
}


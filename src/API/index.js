// src/API/index.js



const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players';

export function fetchPlayers() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching players', error);
  }
    
}
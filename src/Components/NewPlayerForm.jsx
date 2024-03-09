// NewPlayerForm.jsx
import React, { useState } from 'react';

function NewPlayerForm() {
  const [playerName, setPlayerName] = useState('');
  const [playerBreed, setPlayerBreed] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-a/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: playerName,
          breed: playerBreed,
        }),
      });
      // Handle successful creation (e.g., clearing form, notifying the user)
    } catch (err) {
      console.error("Failed to create player:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
      </label>
      <label>
        Breed:
        <input type="text" value={playerBreed} onChange={(e) => setPlayerBreed(e.target.value)} />
      </label>
      <button type="submit">Create Player</button>
    </form>
  );
}

export default NewPlayerForm;



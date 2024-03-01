// src/Components/NewPlayerForm.jsx
import React from 'react';

function NewPlayerForm() {
    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Add Player" />
        </form>
    )
}

export default NewPlayerForm;
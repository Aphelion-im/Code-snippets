// https://edhub.novi.nl/study/courses/516/content/15153 (Meerdere inputs met één onChange handler)
import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [formState, setFormState] = useState({
    firstname: '',
    age: 0,
    comments: '',
    newsletter: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  function handleChange(e) {
    const changedFieldName = e.target.name;
    const newValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value; // Voor checkboxes
    setFormState({
      ...formState,
      [changedFieldName]: newValue,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Gegevens</legend>
          {/* First name field */}
          <label htmlFor="fname">Naam:</label>
          <input
            id="fname"
            type="text"
            name="firstname" // Moet overeenkomen met de useState instelling boven
            value={formState.firstname} // Moet overeenkomen met de waarde uit formState
            onChange={handleChange}
          />
          {/* Age field */}
          <label htmlFor="age">Leeftijd</label>
          <input
            id="age"
            type="text"
            name="age"
            value={formState.age}
            onChange={handleChange}
          />
        </fieldset>

        {/* Comments */}
        <fieldset>
          <legend>Jouw review</legend>
          <label htmlFor="comments">Opmerkingen:</label>
          <textarea
            id="comments"
            cols="30"
            rows="10"
            placeholder="Wat vond je van het recept?"
            name="comments"
            value={formState.comments}
            onChange={handleChange}
          ></textarea>

          {/* Newsletter yes/no */}
          <label htmlFor="newsletter">
            <input
              id="newsletter"
              type="checkbox"
              name="newsletter"
              checked={formState.newsletter} 
              value={formState.newsletter}
              onChange={handleChange}
            />
            Ik schrijf me in voor de nieuwsbrief
          </label>

          <button type="submit">Versturen</button>
        </fieldset>
      </form>
    </>
  );
}

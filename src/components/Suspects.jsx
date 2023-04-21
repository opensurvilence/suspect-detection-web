import { useState, useEffect } from 'react';

function Suspects() {
  const [suspects, setSuspects] = useState([]);

  useEffect(() => {
    const fetchSuspects = async () => {
      try {
        const response = await fetch('/api/suspects');
        if (response.ok) {
          const suspects = await response.json();
          setSuspects(suspects);
        } else {
          console.error('Error fetching suspects:', response.status);
        }
      } catch (error) {
        console.error('Error fetching suspects:', error);
      }
    };
    fetchSuspects();
  }, []);

  return (
    <div className="suspect-cards-container">
      {suspects.map((suspect) => (
        <div className="suspect-card" key={suspect.id}>
          <h2>{suspect.name}</h2>
          <p>Description: {suspect.description}</p>
          <p>Height: {suspect.height} cm</p>
          <p>Weight: {suspect.weight} kg</p>
          <p>Eye Color: {suspect.eyeColor}</p>
          <p>Suspect ID: {suspect.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Suspects;
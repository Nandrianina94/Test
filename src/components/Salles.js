import React, { useState, useEffect } from "react";
import axios from "axios";

const Salles = () => {
    const [salles, setSalles] = useState([]);

    useEffect(() => {
        axios.get("/api/salles")
            .then(response => setSalles(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const salle = {
            occupation: data.get('occupation')
        };
        axios.post("/api/salles", salle)
            .then(response => setSalles([...salles, response.data]))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Liste des Salles</h2>
            <ul>
                {salles.map(salle => (
                    <li key={salle.idsalle}>
                        {salle.occupation}
                    </li>
                ))}
            </ul>
            <h3>Ajouter une Salle</h3>
            <form onSubmit={handleSubmit}>
                <input name="occupation" type="text" placeholder="Occupation" required />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default Salles;

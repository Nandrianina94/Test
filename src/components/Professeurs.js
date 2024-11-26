import React, { useState, useEffect } from "react";
import axios from "axios";

const Professeurs = () => {
    const [professeurs, setProfesseurs] = useState([]);

    useEffect(() => {
        axios.get("/api/professeurs")
            .then(response => setProfesseurs(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const professeur = {
            idprof: data.get('idprof'),
            nom: data.get('nom'),
            prenom: data.get('prenom'),
            grade: data.get('grade')
        };
        axios.post("/api/professeurs", professeur)
            .then(response => setProfesseurs([...professeurs, response.data]))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h3>Ajouter un Professeur</h3>
            <form onSubmit={handleSubmit}>
                <input name="idprof" type="text" placeholder="ID Professeur" required />
                <input name="nom" type="text" placeholder="Nom" required />
                <input name="prenom" type="text" placeholder="Prénom" required />
                <input name="grade" type="text" placeholder="Grade" required />
                <button type="submit">Ajouter</button>
            </form>
            <h2>Liste des Professeurs</h2>
            <ul>
                {professeurs.map(professeur => (
                    <li key={professeur.idprof}>
                        {professeur.nom} {professeur.prenom} - {professeur.grade}
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Professeurs;

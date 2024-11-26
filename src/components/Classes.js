import React, { useState, useEffect } from "react";
import axios from "axios";

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get("/api/classes")
            .then(response => setClasses(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const classe = {
            idclasse: data.get('idclasse'),
            niveau: data.get('niveau')
        };
        axios.post("/api/classes", classe)
            .then(response => setClasses([...classes, response.data]))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Liste des Classes</h2>
            <ul>
                {classes.map(classe => (
                    <li key={classe.idclasse}>
                        {classe.niveau}
                    </li>
                ))}
            </ul>
            <h3>Ajouter une Classe</h3>
            <form onSubmit={handleSubmit}>
                <input name="idclasse" type="text" placeholder="ID Classe" required />
                <input name="niveau" type="text" placeholder="Niveau" required />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default Classes;

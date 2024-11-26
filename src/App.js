import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Professeurs from './components/Professeurs';
import Salles from './components/Salles';
import Classes from './components/Classes';


function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Gestion Emploi du Temps</h1>
                </header>
                <nav>
                    <Link to="/professeurs">Professeurs</Link>
                    <Link to="/salles">Salles</Link>
                    <Link to="/classes">Classes</Link>
                    
                </nav>
                <main>
                    <Routes>
                        <Route path="/professeurs" element={<Professeurs />} />
                        <Route path="/salles" element={<Salles />} />
                        <Route path="/classes" element={<Classes />} />
                        
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;

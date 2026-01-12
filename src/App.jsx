import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import InfinityCanvas from './pages/InfinityCanvas';
import MissionStudies from './pages/MissionStudies';
import CuriosityCode from './pages/CuriosityCode';
import OrbitCrew from './pages/OrbitCrew';
import Documentations from './pages/Documentations';

function App() {
    return (
        <Router>
            <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/infinity-canvas" element={<InfinityCanvas />} />
                    <Route path="/mission-studies" element={<MissionStudies />} />
                    <Route path="/curiosity-code" element={<CuriosityCode />} />
                    <Route path="/documentations" element={<Documentations />} />
                    <Route path="/orbit-crew" element={<OrbitCrew />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

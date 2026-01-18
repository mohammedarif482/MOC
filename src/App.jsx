import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import InfinityCanvas from './pages/InfinityCanvas';
import MissionStudies from './pages/MissionStudies';
import CuriosityCode from './pages/CuriosityCode';
import OrbitCrew from './pages/OrbitCrew';
import Documentations from './pages/Documentations';
import Maintenance from './pages/Maintenance';

function AppContent() {
    const location = useLocation();
    const isMaintenancePage = location.pathname === '/maintenance';

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
            {!isMaintenancePage && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/infinity-canvas" element={<InfinityCanvas />} />
                <Route path="/mission-studies" element={<MissionStudies />} />
                <Route path="/curiosity-code" element={<CuriosityCode />} />
                <Route path="/documentations" element={<Documentations />} />
                <Route path="/orbit-crew" element={<OrbitCrew />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;

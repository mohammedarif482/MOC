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
import JobDetails from './pages/JobDetails';
import Careers from './pages/Careers';

function AppContent() {
    const location = useLocation();
    const isMaintenancePage = location.pathname === '/maintenance' || location.pathname === '/';

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
            {!isMaintenancePage && <Navbar />}
            <Routes>
                <Route path="/" element={<Maintenance />} />
                <Route path="/home" element={<Home />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/software-developer" element={<JobDetails />} />
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

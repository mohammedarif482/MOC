import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import InfinityCanvas from './pages/InfinityCanvas';
import MissionStudies from './pages/MissionStudies';
import CuriosityCode from './pages/CuriosityCode';
import Observatory from './pages/Observatory';
import TheSignal from './pages/TheSignal';
import ImpactStudies from './pages/ImpactStudies';
import TheCommons from './pages/TheCommons';
import Offerings from './pages/Offerings';
import OrbitCrew from './pages/OrbitCrew';
import Documentations from './pages/Documentations';
import Maintenance from './pages/Maintenance';
import CuriosityStation from './pages/CuriosityStation';
import JobDetails from './pages/JobDetails';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';
import MissionStudyArticle from './pages/inner/MissionStudyArticle';
import ObservatoryEssay from './pages/inner/ObservatoryEssay';
import SignalReport from './pages/inner/SignalReport';
import ImpactStudyPage from './pages/inner/ImpactStudyPage';
import CommonsResource from './pages/inner/CommonsResource';
import TeamMemberProfile from './pages/inner/TeamMemberProfile';
import CareerRole from './pages/inner/CareerRole';

function AppContent() {
    const location = useLocation();
    const isMaintenancePage = location.pathname === '/maintenance';

    return (
        <div className="bg-black min-h-screen text-white font-sans">
            {!isMaintenancePage && <Navbar />}
            <Routes>
                <Route path="/" element={<CuriosityStation />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/home" element={<Home />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/software-developer" element={<JobDetails />} />
                <Route path="/infinity-canvas" element={<InfinityCanvas />} />
                <Route path="/mission-studies" element={<MissionStudies />} />
                <Route path="/curiosity-code" element={<CuriosityCode />} />
                <Route path="/the-observatory" element={<Observatory />} />
                <Route path="/the-signal" element={<TheSignal />} />
                <Route path="/impact-studies" element={<ImpactStudies />} />
                <Route path="/the-commons" element={<TheCommons />} />
                <Route path="/offerings" element={<Offerings />} />
                <Route path="/documentations" element={<Documentations />} />
                <Route path="/orbit-crew" element={<OrbitCrew />} />
                <Route path="/mission-studies/:slug" element={<MissionStudyArticle />} />
                <Route path="/the-observatory/:slug" element={<ObservatoryEssay />} />
                <Route path="/the-signal/:slug" element={<SignalReport />} />
                <Route path="/impact-studies/:slug" element={<ImpactStudyPage />} />
                <Route path="/the-commons/:slug" element={<CommonsResource />} />
                <Route path="/curiosity-code/:slug" element={<TeamMemberProfile />} />
                <Route path="/orbit-crew/:slug" element={<CareerRole />} />
                <Route path="*" element={<NotFound />} />
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

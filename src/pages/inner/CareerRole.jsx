import { useParams, Link } from 'react-router-dom';
import { careerRoles } from '../../data/content';
import RolePage from '../../components/templates/RolePage';

const CareerRole = () => {
    const { slug } = useParams();
    const role = careerRoles.find((r) => r.slug === slug);

    if (!role) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-light mb-4">Role not found</h1>
                    <Link
                        to="/orbit-crew"
                        className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                        &larr; Back to Orbit Crew
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <RolePage
            role={role}
            backLink="/orbit-crew"
        />
    );
};

export default CareerRole;

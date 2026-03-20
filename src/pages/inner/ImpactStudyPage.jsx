import { useParams, Link } from 'react-router-dom';
import { impactStudies } from '../../data/content';
import StudyPage from '../../components/templates/StudyPage';

const ImpactStudyPage = () => {
    const { slug } = useParams();
    const study = impactStudies.find((s) => s.slug === slug);

    if (!study) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-light mb-4">Study not found</h1>
                    <Link
                        to="/impact-studies"
                        className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                        &larr; Back to Impact Studies
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <StudyPage
            study={study}
            backLink="/impact-studies"
        />
    );
};

export default ImpactStudyPage;

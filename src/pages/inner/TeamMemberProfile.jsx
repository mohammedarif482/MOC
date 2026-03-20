import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../../data/content';
import ProfilePage from '../../components/templates/ProfilePage';

const TeamMemberProfile = () => {
    const { slug } = useParams();
    const member = teamMembers.find((m) => m.slug === slug);

    if (!member) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-light mb-4">Profile not found</h1>
                    <Link
                        to="/curiosity-code"
                        className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                        &larr; Back to Curiosity Code
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <ProfilePage
            member={member}
            backLink="/curiosity-code"
        />
    );
};

export default TeamMemberProfile;

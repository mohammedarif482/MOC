import { useParams, Link } from 'react-router-dom';
import { commonsResources } from '../../data/content';
import ResourcePage from '../../components/templates/ResourcePage';

const CommonsResource = () => {
    const { slug } = useParams();
    const resource = commonsResources.find((r) => r.slug === slug);

    if (!resource) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-light mb-4">Resource not found</h1>
                    <Link
                        to="/the-commons"
                        className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                        &larr; Back to The Commons
                    </Link>
                </div>
            </div>
        );
    }

    const relatedItems = resource.relatedSlugs
        ? commonsResources.filter((r) => resource.relatedSlugs.includes(r.slug))
        : [];

    return (
        <ResourcePage
            resource={resource}
            backLink="/the-commons"
            relatedItems={relatedItems}
        />
    );
};

export default CommonsResource;

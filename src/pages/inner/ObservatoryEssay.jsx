import { useParams, Link } from 'react-router-dom';
import { observatoryEssays } from '../../data/content';
import ArticlePage from '../../components/templates/ArticlePage';

const ObservatoryEssay = () => {
    const { slug } = useParams();
    const essay = observatoryEssays.find((a) => a.slug === slug);

    if (!essay) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-light mb-4">Essay not found</h1>
                    <Link
                        to="/the-observatory"
                        className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                        &larr; Back to The Observatory
                    </Link>
                </div>
            </div>
        );
    }

    const relatedItems = essay.relatedSlugs
        ? observatoryEssays.filter((a) => essay.relatedSlugs.includes(a.slug))
        : [];

    return (
        <ArticlePage
            item={essay}
            backLink="/the-observatory"
            backLabel="The Observatory"
            relatedItems={relatedItems}
            relatedLabel="Related Essays"
            typeLabel="Observatory Essay"
        />
    );
};

export default ObservatoryEssay;

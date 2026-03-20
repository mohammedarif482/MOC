import { useParams, Link } from 'react-router-dom';
import { missionStudiesArticles } from '../../data/content';
import ArticlePage from '../../components/templates/ArticlePage';

const MissionStudyArticle = () => {
    const { slug } = useParams();
    const article = missionStudiesArticles.find((a) => a.slug === slug);

    if (!article) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-light mb-4">Article not found</h1>
                    <Link
                        to="/mission-studies"
                        className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                        &larr; Back to Mission Studies
                    </Link>
                </div>
            </div>
        );
    }

    const relatedItems = article.relatedSlugs
        ? missionStudiesArticles.filter((a) => article.relatedSlugs.includes(a.slug))
        : [];

    return (
        <ArticlePage
            item={article}
            backLink="/mission-studies"
            backLabel="Mission Studies"
            relatedItems={relatedItems}
            relatedLabel="Related Studies"
            typeLabel="Mission Study"
        />
    );
};

export default MissionStudyArticle;

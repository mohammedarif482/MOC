import { useParams, Link } from 'react-router-dom';
import { signalReports } from '../../data/content';
import ArticlePage from '../../components/templates/ArticlePage';

const SignalReport = () => {
    const { slug } = useParams();
    const report = signalReports.find((a) => a.slug === slug);

    if (!report) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-light mb-4">Report not found</h1>
                    <Link
                        to="/the-signal"
                        className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                        &larr; Back to The Signal
                    </Link>
                </div>
            </div>
        );
    }

    const relatedItems = report.relatedSlugs
        ? signalReports.filter((a) => report.relatedSlugs.includes(a.slug))
        : [];

    return (
        <ArticlePage
            item={report}
            backLink="/the-signal"
            backLabel="The Signal"
            relatedItems={relatedItems}
            relatedLabel="Related Reports"
            typeLabel="Signal Report"
        />
    );
};

export default SignalReport;

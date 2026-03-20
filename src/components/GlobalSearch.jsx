import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import {
  missionStudiesArticles,
  observatoryEssays,
  signalReports,
  impactStudies,
  commonsResources,
  teamMembers,
  careerRoles,
} from '../data/content';

const contentSources = [
  {
    key: 'missionStudies',
    label: 'Mission Studies',
    data: missionStudiesArticles,
    getTitle: (item) => item.title,
    getSubtitle: (item) => [item.type, item.date].filter(Boolean).join(' · '),
    getPath: (item) => `/mission-studies/${item.slug}`,
    getSearchable: (item) => `${item.title} ${item.type || ''} ${item.product || ''} ${item.summary || ''}`,
  },
  {
    key: 'observatory',
    label: 'The Observatory',
    data: observatoryEssays,
    getTitle: (item) => item.title,
    getSubtitle: (item) => [item.category, item.date].filter(Boolean).join(' · '),
    getPath: (item) => `/the-observatory/${item.slug}`,
    getSearchable: (item) => `${item.title} ${item.category || ''} ${item.summary || ''}`,
  },
  {
    key: 'signal',
    label: 'The Signal',
    data: signalReports,
    getTitle: (item) => item.title,
    getSubtitle: (item) => [item.type, item.date].filter(Boolean).join(' · '),
    getPath: (item) => `/the-signal/${item.slug}`,
    getSearchable: (item) => `${item.title} ${item.type || ''} ${item.industry || ''} ${item.summary || ''}`,
  },
  {
    key: 'impactStudies',
    label: 'Impact Studies',
    data: impactStudies,
    getTitle: (item) => item.title,
    getSubtitle: (item) => [item.product, item.sector].filter(Boolean).join(' · '),
    getPath: (item) => `/impact-studies/${item.slug}`,
    getSearchable: (item) => `${item.title} ${item.product || ''} ${item.sector || ''} ${item.problem || ''}`,
  },
  {
    key: 'commons',
    label: 'The Commons',
    data: commonsResources,
    getTitle: (item) => item.title,
    getSubtitle: (item) => [item.type, item.topic].filter(Boolean).join(' · '),
    getPath: (item) => `/the-commons/${item.slug}`,
    getSearchable: (item) => `${item.title} ${item.type || ''} ${item.topic || ''} ${item.summary || ''}`,
  },
  {
    key: 'team',
    label: 'Team',
    data: teamMembers,
    getTitle: (item) => item.name,
    getSubtitle: (item) => item.role,
    getPath: (item) => `/curiosity-code/${item.slug}`,
    getSearchable: (item) => `${item.name} ${item.role} ${item.whatTheyDo || ''}`,
  },
  {
    key: 'careers',
    label: 'Careers',
    data: careerRoles,
    getTitle: (item) => item.title,
    getSubtitle: (item) => [item.type, item.location].filter(Boolean).join(' · '),
    getPath: (item) => `/orbit-crew/${item.slug}`,
    getSearchable: (item) => `${item.title} ${item.type || ''} ${item.location || ''} ${item.oneLine || ''}`,
  },
];

const GlobalSearch = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const grouped = [];

    for (const source of contentSources) {
      const matches = source.data.filter((item) =>
        source.getSearchable(item).toLowerCase().includes(trimmed)
      );
      if (matches.length > 0) {
        grouped.push({
          label: source.label,
          items: matches.map((item) => ({
            title: source.getTitle(item),
            subtitle: source.getSubtitle(item),
            path: source.getPath(item),
          })),
        });
      }
    }

    return grouped;
  }, [query]);

  const hasResults = results.length > 0;
  const hasQuery = query.trim().length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-start justify-center pt-[10vh] px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 border-b border-white/10">
              <Search className="w-4 h-4 text-white/40 shrink-0" strokeWidth={1.5} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search everything..."
                className="w-full py-4 bg-transparent text-white text-[15px] placeholder:text-white/30 outline-none"
              />
              <button
                onClick={onClose}
                className="shrink-0 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {hasQuery && !hasResults && (
                <div className="px-5 py-12 text-center">
                  <p className="text-white/40 text-[14px]">No results found</p>
                  <p className="text-white/20 text-[13px] mt-1">
                    Try a different search term
                  </p>
                </div>
              )}

              {hasResults &&
                results.map((group) => (
                  <div key={group.label}>
                    <div className="px-5 pt-4 pb-2">
                      <p className="text-[11px] text-white/40 uppercase tracking-[0.15em] font-medium">
                        {group.label}
                      </p>
                    </div>
                    {group.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className="block px-5 py-3 hover:bg-white/5 transition-colors"
                      >
                        <p className="text-white text-[14px] leading-snug">
                          {item.title}
                        </p>
                        {item.subtitle && (
                          <p className="text-white/40 text-[12px] mt-0.5">
                            {item.subtitle}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                ))}
            </div>

            {/* Footer hint */}
            <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
              <p className="text-white/20 text-[11px]">
                Navigate with keyboard
              </p>
              <p className="text-white/20 text-[11px]">
                <kbd className="px-1.5 py-0.5 border border-white/10 rounded text-[10px]">ESC</kbd>{' '}
                to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalSearch;

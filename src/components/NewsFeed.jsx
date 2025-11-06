import { Star, ExternalLink } from 'lucide-react';

const articles = [
  {
    id: 'a1',
    title: 'Edge runtimes are rewriting the playbook',
    source: 'Compute Journal',
    url: '#',
    summary:
      'Cold boots are out, warm edges are in. Teams are shipping micro-services closer to users for instant TTFB.',
    score: 324,
  },
  {
    id: 'a2',
    title: 'Design tokens: one system to rule colors in dark UIs',
    source: 'Interface Notes',
    url: '#',
    summary:
      'Token-driven theming keeps consistency across apps. Tips for contrast, chroma, and accessibility in the dark.',
    score: 210,
  },
  {
    id: 'a3',
    title: 'Practical RAG: getting value without overbuilding',
    source: 'ML Weekly',
    url: '#',
    summary:
      'A field guide to delivering search that actually helps users before jumping to multi-agent orchestration.',
    score: 178,
  },
];

export default function NewsFeed() {
  return (
    <section className="mt-10 space-y-4">
      <h2 className="text-lg font-semibold text-white/90">Curated News</h2>
      {articles.map((a) => (
        <article
          key={a.id}
          className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white font-medium leading-tight">{a.title}</h3>
              <p className="mt-1 text-sm text-white/70">{a.summary}</p>
              <div className="mt-2 text-xs text-white/50">{a.source}</div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-xs text-white">
                <Star className="h-3.5 w-3.5 text-yellow-300" /> {a.score}
              </span>
              <a
                href={a.url}
                className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-purple-200"
              >
                Read <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

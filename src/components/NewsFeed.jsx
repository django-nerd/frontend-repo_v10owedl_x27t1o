import { Star, Calendar, Share2, MessageSquare } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'AI makes a leap: Multimodal models go mainstream',
    summary: 'New research blends text, images, and audio to create assistants that understand the world like humans do.',
    tag: 'Technology',
    date: 'Today',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Fusion energy crosses key milestone',
    summary: 'Scientists report net energy gain in repeated experiments—industry gears up for pilot plants.',
    tag: 'Science',
    date: '2h ago',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Design systems in 2025: tokens, AI, and speed',
    summary: 'What top product teams changed in their design stacks to ship faster with higher quality.',
    tag: 'Design',
    date: 'Yesterday',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function NewsFeed() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-3">
      {articles.map((a) => (
        <article key={a.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
          <div className="relative">
            <img
              src={a.image}
              alt=""
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow">{a.tag}</span>
          </div>
          <div className="space-y-3 p-4">
            <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-gray-900">{a.title}</h3>
            <p className="line-clamp-3 text-sm text-gray-600">{a.summary}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {a.date}</span>
              <div className="flex items-center gap-3 text-gray-500">
                <button className="inline-flex items-center gap-1 hover:text-gray-700"><Star className="h-4 w-4" /> Save</button>
                <button className="inline-flex items-center gap-1 hover:text-gray-700"><Share2 className="h-4 w-4" /> Share</button>
              </div>
            </div>
          </div>
        </article>
      ))}
      <aside className="md:col-span-3">
        <div className="mt-2 rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-900">
          Tip: Switch to the Community tab to explore the Reddit-style feed and join discussions.
        </div>
      </aside>
    </section>
  );
}

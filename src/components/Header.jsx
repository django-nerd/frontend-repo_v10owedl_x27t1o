import { Home, Newspaper, Flame, Search, Plus, User, Settings } from 'lucide-react';
import { useState } from 'react';

export default function Header({ activeTab, setActiveTab, onCreatePost }) {
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-md">
            <Flame className="h-5 w-5" />
          </div>
          <span className="hidden text-lg font-semibold tracking-tight sm:block">Flare News</span>
        </div>

        <nav className="ml-4 hidden items-center gap-1 rounded-full bg-gray-100 p-1 sm:flex">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition ${
              activeTab === 'news' ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-label="News"
          >
            <Newspaper className="h-4 w-4" />
            News
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition ${
              activeTab === 'community' ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Community"
          >
            <Home className="h-4 w-4" />
            Community
          </button>
        </nav>

        <div className="relative ml-auto w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, posts, communities..."
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
        </div>

        <div className="ml-2 flex items-center gap-2">
          <button
            onClick={onCreatePost}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4" />
            Create
          </button>
          <button className="hidden rounded-xl border border-gray-200 p-2 text-gray-600 hover:bg-gray-50 sm:block" aria-label="User">
            <User className="h-5 w-5" />
          </button>
          <button className="hidden rounded-xl border border-gray-200 p-2 text-gray-600 hover:bg-gray-50 sm:block" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

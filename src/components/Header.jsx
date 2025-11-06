import { Home, Newspaper, Flame, Search, Plus, User, Settings } from 'lucide-react';
import { useState } from 'react';

export default function Header({ activeTab, setActiveTab, onCreatePost }) {
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-20 border-b border-purple-500/20 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 text-white shadow-md">
            <Flame className="h-5 w-5" />
          </div>
          <span className="hidden text-lg font-semibold tracking-tight text-white sm:block">DusknoirDotNet</span>
        </div>

        <nav className="ml-4 hidden items-center gap-1 rounded-full bg-white/5 p-1 ring-1 ring-white/10 sm:flex">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition ${
              activeTab === 'news' ? 'bg-white/10 text-white shadow' : 'text-gray-300 hover:text-white'
            }`}
            aria-label="News"
          >
            <Newspaper className="h-4 w-4" />
            News
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition ${
              activeTab === 'community' ? 'bg-white/10 text-white shadow' : 'text-gray-300 hover:text-white'
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
            className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-gray-400 focus:border-purple-400/40 focus:ring-4 focus:ring-purple-500/10"
          />
        </div>

        <div className="ml-2 flex items-center gap-2">
          <button
            onClick={onCreatePost}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:brightness-110"
          >
            <Plus className="h-4 w-4" />
            Create
          </button>
          <button className="hidden rounded-xl border border-white/10 p-2 text-gray-300 hover:bg-white/5 sm:block" aria-label="User">
            <User className="h-5 w-5" />
          </button>
          <button className="hidden rounded-xl border border-white/10 p-2 text-gray-300 hover:bg-white/5 sm:block" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

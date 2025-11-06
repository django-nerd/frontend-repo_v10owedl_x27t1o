import { Rocket, Home, Newspaper, Users, Plus } from 'lucide-react';

export default function Header({ activeTab, onChangeTab, onCreate }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/70 border-b border-purple-500/30">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-fuchsia-600 grid place-items-center">
            <Rocket className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-white">DusknoirDotNet</span>
        </div>

        <nav className="flex items-center gap-1 text-white/80">
          <button
            onClick={() => onChangeTab('news')}
            className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
              activeTab === 'news'
                ? 'bg-white/10 text-white'
                : 'hover:bg-white/5 hover:text-white'
            }`}
          >
            <Newspaper className="h-4 w-4" />
            News
          </button>
          <button
            onClick={() => onChangeTab('community')}
            className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
              activeTab === 'community'
                ? 'bg-white/10 text-white'
                : 'hover:bg-white/5 hover:text-white'
            }`}
          >
            <Users className="h-4 w-4" />
            Constellations
          </button>
          <button
            onClick={onCreate}
            className="ml-2 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white shadow-md shadow-fuchsia-900/20 hover:brightness-110"
          >
            <Plus className="h-4 w-4" />
            Create
          </button>
        </nav>
      </div>
    </header>
  );
}

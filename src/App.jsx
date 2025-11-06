import { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsFeed from './components/NewsFeed';
import CommunityFeed from './components/CommunityFeed';
import CreatePostModal from './components/CreatePostModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('news');
  const [showCreate, setShowCreate] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 101,
      community: 'r/technology',
      author: 'arron',
      title: 'What small AI tool saved you the most time this year?',
      body: 'Mine: a script that auto-summarizes long meeting notes into 5 bullets. Shockingly good.',
      votes: 312,
      comments: 86,
    },
    {
      id: 102,
      community: 'r/science',
      author: 'mai',
      title: 'ELI5: How do fusion reactors contain plasma?',
      body: 'I keep reading about tokamaks and stellarators—curious about the actual containment magic.',
      votes: 198,
      comments: 34,
    },
    {
      id: 103,
      community: 'r/design',
      author: 'sachi',
      title: 'Show HN: I rebuilt our design system with tokens + Tailwind',
      body: 'We cut time to ship by 40%. Happy to share a starter pack if folks want it.',
      votes: 420,
      comments: 129,
    },
  ]);

  const handleVote = (id, delta) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, votes: Math.max(0, p.votes + delta) } : p)));
  };

  const handleCreatePost = (data) => {
    setPosts((prev) => [
      {
        id: Math.max(0, ...prev.map((p) => p.id)) + 1,
        author: 'you',
        votes: 1,
        comments: 0,
        ...data,
      },
      ...prev,
    ]);
    setShowCreate(false);
    setActiveTab('community');
  };

  const showHero = useMemo(() => activeTab === 'news', [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} onCreatePost={() => setShowCreate(true)} />

      {showHero && <Hero onExploreNews={() => setActiveTab('news')} onExploreCommunity={() => setActiveTab('community')} />}

      {activeTab === 'news' ? <NewsFeed /> : <CommunityFeed posts={posts} onVote={handleVote} />}

      <CreatePostModal open={showCreate} onClose={() => setShowCreate(false)} onSubmit={handleCreatePost} />

      <footer className="mx-auto max-w-7xl px-4 py-10 text-center text-sm text-gray-500">
        Built with ❤️ — News + Community in one clean experience.
      </footer>
    </div>
  );
}

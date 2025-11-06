import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import NewsFeed from './components/NewsFeed.jsx';
import CommunityFeed from './components/CommunityFeed.jsx';
import CreatePostModal from './components/CreatePostModal.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('news');
  const [showCreate, setShowCreate] = useState(false);

  const [communityPosts, setCommunityPosts] = useState([
    {
      id: 'p1',
      author: 'NovaCodes',
      title: 'Showcase: Night-sky UI kit for dashboards',
      body: 'Shared a Figma kit with layered purple glows, perfect for dark products. Feedback welcome!',
      constellation: 'design-orbit',
      upvotes: 128,
      comments: 14,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'p2',
      author: 'DataWisp',
      title: 'Thoughts on edge inference for indie apps',
      body: 'Moving small models to the edge shaved 300ms off TTFB in our app. Sharing infra notes.',
      constellation: 'quantum-lane',
      upvotes: 87,
      comments: 23,
      createdAt: new Date().toISOString(),
    },
  ]);

  const handleCreatePost = (payload) => {
    const newPost = {
      id: `p-${Date.now()}`,
      author: payload.author || 'You',
      title: payload.title,
      body: payload.body,
      constellation: payload.constellation || 'general',
      upvotes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
    };
    setCommunityPosts((prev) => [newPost, ...prev]);
    setShowCreate(false);
    setActiveTab('community');
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Subtle purple gradient wash */}
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      <Header activeTab={activeTab} onChangeTab={setActiveTab} onCreate={() => setShowCreate(true)} />
      <Hero onCreate={() => setShowCreate(true)} />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        {activeTab === 'news' ? (
          <NewsFeed />
        ) : (
          <CommunityFeed posts={communityPosts} onCreate={() => setShowCreate(true)} />
        )}
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-sm text-white/60">
        DusknoirDotNet — News + Community in one cosmic experience.
      </footer>

      {showCreate && (
        <CreatePostModal
          onCancel={() => setShowCreate(false)}
          onSubmit={handleCreatePost}
        />
      )}
    </div>
  );
}

export default App;

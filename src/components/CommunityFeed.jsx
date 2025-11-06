import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2, Bookmark } from 'lucide-react';

function PostCard({ post, onVote }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm">
      <div className="flex w-10 flex-col items-center gap-1 rounded-xl bg-white/5 py-2">
        <button onClick={() => onVote(post.id, 1)} className="rounded p-1 text-gray-300 hover:bg-white/10 hover:text-white" aria-label="Upvote">
          <ArrowBigUp className="h-6 w-6" />
        </button>
        <span className="text-sm font-semibold text-white">{post.votes}</span>
        <button onClick={() => onVote(post.id, -1)} className="rounded p-1 text-gray-300 hover:bg-white/10 hover:text-white" aria-label="Downvote">
          <ArrowBigDown className="h-6 w-6" />
        </button>
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <span className="font-medium text-purple-300">{post.community}</span>
          <span>•</span>
          <span>Posted by u/{post.author}</span>
        </div>
        <h4 className="mb-1 text-lg font-semibold tracking-tight text-white">{post.title}</h4>
        {post.body && <p className="mb-3 text-sm text-gray-300">{post.body}</p>}
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <button className="inline-flex items-center gap-1 hover:text-white">
            <MessageSquare className="h-4 w-4" /> {post.comments} Comments
          </button>
          <button className="inline-flex items-center gap-1 hover:text-white">
            <Share2 className="h-4 w-4" /> Share
          </button>
          <button className="inline-flex items-center gap-1 hover:text-white">
            <Bookmark className="h-4 w-4" /> Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CommunityFeed({ posts = [], onVote }) {
  const totalCommunities = new Set(posts.map((p) => p.community)).size;

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-3">
      <div className="space-y-4 md:col-span-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onVote={onVote} />
        ))}
        {posts.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-gray-300">
            No posts yet. Be the first to create one!
          </div>
        )}
      </div>
      <aside className="space-y-4">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm">
          <h5 className="mb-2 text-sm font-semibold text-white">About this community</h5>
          <p className="text-sm text-gray-300">A modern space for thoughtful discussions on tech, science, and design.</p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-white/5 p-3 text-center">
              <div className="text-xl font-bold text-white">{posts.length}</div>
              <div className="text-xs text-gray-400">Posts</div>
            </div>
            <div className="rounded-xl bg-white/5 p-3 text-center">
              <div className="text-xl font-bold text-white">{totalCommunities}</div>
              <div className="text-xs text-gray-400">Communities</div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/30 p-4 text-sm text-purple-100 shadow-sm">
          Looking for the latest headlines? Switch to the News tab to browse curated stories.
        </div>
      </aside>
    </section>
  );
}

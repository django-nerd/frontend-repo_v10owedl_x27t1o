import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2, Bookmark } from 'lucide-react';

function PostCard({ post, onVote }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex w-10 flex-col items-center gap-1 rounded-xl bg-gray-50 py-2">
        <button onClick={() => onVote(post.id, 1)} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700" aria-label="Upvote">
          <ArrowBigUp className="h-6 w-6" />
        </button>
        <span className="text-sm font-semibold text-gray-800">{post.votes}</span>
        <button onClick={() => onVote(post.id, -1)} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700" aria-label="Downvote">
          <ArrowBigDown className="h-6 w-6" />
        </button>
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span className="font-medium text-indigo-600">{post.community}</span>
          <span>•</span>
          <span>Posted by u/{post.author}</span>
        </div>
        <h4 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">{post.title}</h4>
        {post.body && <p className="mb-3 text-sm text-gray-700">{post.body}</p>}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <button className="inline-flex items-center gap-1 hover:text-gray-700">
            <MessageSquare className="h-4 w-4" /> {post.comments} Comments
          </button>
          <button className="inline-flex items-center gap-1 hover:text-gray-700">
            <Share2 className="h-4 w-4" /> Share
          </button>
          <button className="inline-flex items-center gap-1 hover:text-gray-700">
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
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
            No posts yet. Be the first to create one!
          </div>
        )}
      </div>
      <aside className="space-y-4">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <h5 className="mb-2 text-sm font-semibold text-gray-900">About this community</h5>
          <p className="text-sm text-gray-600">A modern space for thoughtful discussions on tech, science, and design.</p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-gray-50 p-3 text-center">
              <div className="text-xl font-bold text-gray-900">{posts.length}</div>
              <div className="text-xs text-gray-500">Posts</div>
            </div>
            <div className="rounded-xl bg-gray-50 p-3 text-center">
              <div className="text-xl font-bold text-gray-900">{totalCommunities}</div>
              <div className="text-xs text-gray-500">Communities</div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-50 to-fuchsia-50 p-4 text-sm shadow-sm">
          Looking for the latest headlines? Switch to the News tab to browse curated stories.
        </div>
      </aside>
    </section>
  );
}

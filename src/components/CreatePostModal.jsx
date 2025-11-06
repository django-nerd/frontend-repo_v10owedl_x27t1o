import { useState } from 'react';

export default function CreatePostModal({ onCancel, onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [constellation, setConstellation] = useState('design-orbit');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    onSubmit({ title, body, constellation, author });
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4">
      <div className="w-full max-w-lg rounded-xl border border-white/10 bg-black p-5 text-white shadow-xl">
        <h3 className="text-lg font-semibold">Create a new thread</h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="text-sm text-white/70">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="What do you want to discuss?"
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Constellation</label>
            <select
              value={constellation}
              onChange={(e) => setConstellation(e.target.value)}
              className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {['design-orbit', 'quantum-lane', 'tooling-lab', 'ship-it', 'general'].map((c) => (
                <option key={c} value={c} className="bg-black text-white">{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-white/70">Body</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={5}
              className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Share details, context, and examples..."
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Your name (optional)</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., NovaCodes"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-600 px-3 py-2 text-sm font-medium text-white hover:brightness-110"
            >
              Post Thread
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

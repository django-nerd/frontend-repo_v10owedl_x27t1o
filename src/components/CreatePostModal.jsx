import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CreatePostModal({ open, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [community, setCommunity] = useState('r/technology');

  useEffect(() => {
    if (!open) {
      setTitle('');
      setBody('');
      setCommunity('r/technology');
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, body, community });
  };

  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <h3 className="text-base font-semibold text-white">Create a post</h3>
          <button onClick={onClose} className="rounded-lg p-1.5 text-gray-300 hover:bg-white/5" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3 p-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-200">Community</label>
            <select value={community} onChange={(e) => setCommunity(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-purple-400/40 focus:ring-4 focus:ring-purple-500/10">
              <option className="bg-black">r/technology</option>
              <option className="bg-black">r/science</option>
              <option className="bg-black">r/design</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-200">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-gray-400 focus:border-purple-400/40 focus:ring-4 focus:ring-purple-500/10" placeholder="What do you want to share?" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-200">Body</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-gray-400 focus:border-purple-400/40 focus:ring-4 focus:ring-purple-500/10" placeholder="Write your post here..." />
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button type="button" onClick={onClose} className="rounded-xl border border-white/10 px-3 py-2 text-sm text-gray-200 hover:bg-white/5">Cancel</button>
            <button type="submit" className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-3 py-2 text-sm font-medium text-white hover:brightness-110">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { Rocket, Newspaper, MessagesSquare } from 'lucide-react';

export default function Hero({ onExploreNews, onExploreCommunity }) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-100">
              <Rocket className="h-4 w-4" />
              A modern blend of headlines + community
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Stay informed. Join the conversation.
            </h1>
            <p className="mt-3 text-base leading-7 text-gray-600 md:text-lg">
              Curated news you can trust, paired with a friendly, Reddit-style space to react, upvote, and share ideas.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button onClick={onExploreNews} className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-gray-800">
                Explore News
              </button>
              <button onClick={onExploreCommunity} className="rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50">
                Explore Community
              </button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-1 text-xs font-medium text-gray-500">Headlines</div>
              <div className="flex items-center gap-2 text-gray-900">
                <Newspaper className="h-5 w-5 text-indigo-600" />
                Fresh stories daily
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-1 text-xs font-medium text-gray-500">Community</div>
              <div className="flex items-center gap-2 text-gray-900">
                <MessagesSquare className="h-5 w-5 text-fuchsia-600" />
                Upvotes and replies
              </div>
            </div>
            <div className="col-span-2 rounded-2xl bg-gradient-to-br from-indigo-50 to-fuchsia-50 p-4 text-sm text-indigo-900 ring-1 ring-inset ring-indigo-100">
              Clean, modern UI with smooth interactions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

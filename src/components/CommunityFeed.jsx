import { ArrowBigUp, MessageSquare, Tag } from 'lucide-react';

function ConstellationTag({ name }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
      <Tag className="h-3.5 w-3.5 text-purple-300" />
      {name}
    </span>
  );
}

export default function CommunityFeed({ posts, onCreate }) {
  return (
    <section id="community" className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white/90">Community Threads</h2>
          <button
            onClick={onCreate}
            className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10"
          >
            New Thread
          </button>
        </div>

        {posts.map((p) => (
          <article key={p.id} className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex items-start gap-4">
              <button className="group rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/80 hover:bg-white/10">
                <ArrowBigUp className="h-5 w-5 text-white group-hover:text-purple-300" />
              </button>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <ConstellationTag name={p.constellation} />
                  <span className="text-xs text-white/50">by {p.author}</span>
                  <span className="text-xs text-white/40">• {new Date(p.createdAt).toLocaleDateString()}</span>
                </div>
                <h3 className="mt-1 text-white font-medium leading-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.body}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-white/60">
                  <span>{p.upvotes} upvotes</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span className="inline-flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" /> {p.comments} comments
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="space-y-4">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <h3 className="font-medium text-white">Discover Constellations</h3>
          <p className="mt-1 text-sm text-white/70">
            Explore topic clusters. No /r/ prefixes — modern, clean, and purpose-built.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {['design-orbit', 'quantum-lane', 'tooling-lab', 'ship-it'].map((c) => (
              <ConstellationTag key={c} name={c} />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <h3 className="font-medium text-white">Posting Guidelines</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
            <li>Share learnings, not just links.</li>
            <li>Be specific. Add context and examples.</li>
            <li>Assume good intent; keep it constructive.</li>
          </ul>
        </div>
      </aside>
    </section>
  );
}

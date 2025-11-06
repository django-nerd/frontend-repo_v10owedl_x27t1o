import { Rocket, Newspaper, MessagesSquare } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onExploreNews, onExploreCommunity }) {
  return (
    <section className="relative isolate overflow-hidden" style={{ height: '60vh' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-purple-200 ring-1 ring-inset ring-white/10">
            <Rocket className="h-4 w-4" />
            A modern blend of headlines + community
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white drop-shadow sm:text-4xl md:text-5xl">
            DusknoirDotNet
          </h1>
          <p className="mt-3 max-w-xl text-base leading-7 text-gray-200 md:text-lg">
            Curated news meets a cosmic community. Explore the galaxy of ideas with a sleek, dark interface.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button onClick={onExploreNews} className="rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur ring-1 ring-white/20 hover:bg-white/20">
              Explore News
            </button>
            <button onClick={onExploreCommunity} className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-2.5 text-sm font-medium text-white shadow">
              Explore Community
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}

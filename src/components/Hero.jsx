export default function Hero({ onCreate }) {
  return (
    <section className="relative overflow-hidden">
      {/* Removed heavy galaxy/Spline scene for performance */}
      <div className="h-[48vh] w-full bg-gradient-to-b from-purple-800/30 via-black to-black" />

      {/* Copy + actions */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-4 w-full">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
              DusknoirDotNet
            </h1>
            <p className="mt-3 text-white/70">
              Curated tech news meets a modern community — fast, focused, and beautifully dark.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onCreate}
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-fuchsia-900/20 hover:brightness-110"
              >
                Start a Thread
              </button>
              <a
                href="#community"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                Explore Constellations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Soft gradient accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>
    </section>
  );
}

const Banner = ({ onBrowse }) => {
  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            The{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Ultimate SaaS
            </span>{' '}
            Toolkit for Modern Teams
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-xl">
            Supercharge your workflow with battle-tested tools. From analytics to AI — everything your team needs to ship faster and grow smarter.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={onBrowse}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-7 py-3 rounded-xl font-medium transition"
            >
              Browse Product
            </button>
            <a
              href="#pricing-sec"
              className="border border-white/25 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition"
            >
              View Pricing
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full max-w-sm">
            <div className="flex gap-2 mb-4">
              {[1,2,3].map(i => <div key={i} className="w-3 h-3 rounded-full bg-white/20" />)}
            </div>
            {[
              { color: 'from-indigo-500 to-cyan-400', w: '70%' },
              { color: 'from-cyan-400 to-emerald-400', w: '55%' },
              { color: 'from-amber-400 to-red-400', w: '65%' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-3 mb-3 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex-shrink-0`} />
                <div className="flex-1">
                  <div className="h-2.5 rounded bg-white/10 mb-1.5" style={{ width: item.w }} />
                  <div className="h-2 rounded bg-white/6 w-2/5" />
                </div>
              </div>
            ))}
            <div className="mt-4 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-lg h-10 flex items-center justify-center">
              <span className="text-white text-sm font-bold">Get Started Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

const steps = [
  { num: '1', title: 'Browse Products', desc: 'Explore our curated catalog of SaaS tools built for modern teams' },
  { num: '2', title: 'Add to Cart', desc: 'Select the tools your team needs and add them to your cart instantly' },
  { num: '3', title: 'Checkout Securely', desc: 'Pay once or subscribe — flexible billing options for every team' },
  { num: '4', title: 'Launch & Grow', desc: 'Get instant access and start shipping faster from day one' },
]

const StepsSection = () => (
  <section className="bg-slate-900 py-16 px-6" id="steps-sec">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-white text-3xl font-extrabold text-center mb-2">How It Works</h2>
      <p className="text-slate-400 text-center mb-12">Get up and running in minutes — no technical expertise required</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4">
              {s.num}
            </div>
            <div className="text-white font-bold mb-2">{s.title}</div>
            <p className="text-slate-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default StepsSection

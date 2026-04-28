const stats = [
  { num: '50K+', label: 'Happy Customers' },
  { num: '99.9%', label: 'Uptime SLA' },
  { num: '120+', label: 'Integrations' },
  { num: '4.9★', label: 'Average Rating' },
]

const Stats = () => (
  <section className="bg-white border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="text-center py-4 border-r border-slate-200 last:border-0">
          <div className="text-3xl font-extrabold text-indigo-500">{s.num}</div>
          <div className="text-slate-500 text-sm mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
)

export default Stats

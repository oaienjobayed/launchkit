const plans = [
  {
    tier: 'Starter',
    price: '$29',
    period: '/mo',
    desc: 'Perfect for solo founders and small teams just getting started.',
    featured: false,
    features: ['Up to 3 products', '5 team members', 'Basic analytics', 'Email support'],
    cta: 'Get Started',
  },
  {
    tier: 'Pro',
    price: '$79',
    period: '/mo',
    desc: 'For growing teams that need more power and integrations.',
    featured: true,
    features: ['Unlimited products', '25 team members', 'Advanced analytics', 'Priority support', '120+ integrations'],
    cta: 'Start Free Trial',
  },
  {
    tier: 'Enterprise',
    price: '$199',
    period: '/mo',
    desc: 'Custom solutions for large organizations with advanced needs.',
    featured: false,
    features: ['Everything in Pro', 'Unlimited members', 'Dedicated manager', 'Custom contracts', 'SLA & SSO'],
    cta: 'Contact Sales',
  },
]

const PricingSection = () => (
  <section className="bg-white py-16 px-6" id="pricing-sec">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-2">Simple, Transparent Pricing</h2>
      <p className="text-slate-500 text-center mb-12">Choose the plan that fits your team. No hidden fees, no surprises.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 flex flex-col gap-3 border transition hover:shadow-lg ${
              p.featured
                ? 'border-indigo-400 border-2 bg-indigo-50/40'
                : 'border-slate-200'
            }`}
          >
            <div className="font-bold text-slate-900 text-lg">{p.tier}</div>
            {p.featured && (
              <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit">
                Most Popular
              </span>
            )}
            <div className="text-4xl font-extrabold text-slate-900">
              {p.price}
              <span className="text-base font-normal text-slate-400">{p.period}</span>
            </div>
            <p className="text-slate-500 text-sm">{p.desc}</p>
            <hr className="border-slate-200 my-1" />
            {p.features.map((f, j) => (
              <div key={j} className="text-sm text-slate-500 flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span> {f}
              </div>
            ))}
            <button
              className={`mt-auto py-3 rounded-xl text-sm font-medium text-white transition ${
                p.featured
                  ? 'bg-indigo-500 hover:bg-indigo-600'
                  : 'bg-slate-900 hover:bg-indigo-500'
              }`}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default PricingSection

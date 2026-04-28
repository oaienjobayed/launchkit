const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-14 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="col-span-2 md:col-span-1">
          <div className="text-white font-extrabold text-lg mb-3">🚀 LaunchKit</div>
          <p className="text-sm leading-relaxed">
            The all-in-one SaaS marketplace for teams that move fast and build great products.
          </p>
        </div>
        {[
          { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
          { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
          { title: 'Support', links: ['Docs', 'Community', 'Status', 'Contact'] },
        ].map((col, i) => (
          <div key={i}>
            <h4 className="text-white font-bold mb-4 text-sm">{col.title}</h4>
            {col.links.map((link, j) => (
              <a key={j} href="#" className="block text-sm mb-2 hover:text-white transition">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
        <span>© 2025 LaunchKit, Inc. All rights reserved </span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

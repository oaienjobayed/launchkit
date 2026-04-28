const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-slate-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-white font-bold text-xl flex items-center gap-2">
          🚀 <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">LaunchKit</span>
        </div>
        <div className="hidden md:flex gap-6 text-slate-400 text-sm">
          <a href="#products-sec" className="hover:text-white transition">Products</a>
          <a href="#steps-sec" className="hover:text-white transition">How it works</a>
          <a href="#pricing-sec" className="hover:text-white transition">Pricing</a>
        </div>
        <button
          onClick={onCartClick}
          className="flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition"
        >
          🛒 Cart
          <span className="bg-indigo-500 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

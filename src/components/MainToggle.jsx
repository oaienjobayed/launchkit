import ProductsGrid from './ProductsGrid'
import CartSection from './CartSection'

const MainToggle = ({ view, setView, cart, onAdd, onRemove, onCheckout }) => {
  return (
    <div id="products-sec" className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-center mb-8">
        <div className="flex bg-white border border-slate-200 rounded-xl p-1 gap-1">
          <button
            onClick={() => setView('products')}
            className={`px-8 py-2.5 rounded-lg font-medium text-sm transition ${
              view === 'products'
                ? 'bg-slate-900 text-white'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            📦 Products
          </button>
          <button
            onClick={() => setView('cart')}
            className={`px-8 py-2.5 rounded-lg font-medium text-sm transition ${
              view === 'cart'
                ? 'bg-slate-900 text-white'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            🛒 Cart
          </button>
        </div>
      </div>

      {view === 'products' && <ProductsGrid onAdd={onAdd} />}
      {view === 'cart' && (
        <CartSection cart={cart} onRemove={onRemove} onCheckout={onCheckout} />
      )}
    </div>
  )
}

export default MainToggle

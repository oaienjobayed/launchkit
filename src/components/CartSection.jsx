import CartItem from './CartItem'

const CartSection = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (!cart.length) {
    return (
      <div className="text-center py-20 text-slate-400">
        <div className="text-5xl mb-4 opacity-30">🛒</div>
        <p className="font-semibold text-lg">Your cart is empty</p>
        <p className="text-sm mt-1">Switch to Products to browse</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4">
      <div className="bg-white border border-slate-200 rounded-2xl px-6 py-4 flex justify-between items-center">
        <div className="text-slate-500 text-sm">
          {cart.length} item{cart.length > 1 ? 's' : ''} in cart
        </div>
        <div className="text-2xl font-extrabold text-slate-900">${total}</div>
      </div>
      {cart.map(item => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
      <button
        onClick={onCheckout}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-base transition mt-1"
      >
        🔒 Proceed to Checkout
      </button>
    </div>
  )
}

export default CartSection

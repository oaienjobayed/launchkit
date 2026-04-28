const CartItem = ({ item, onRemove }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4">
    <div className="text-2xl w-11 h-11 flex items-center justify-center bg-slate-50 rounded-xl flex-shrink-0">
      {item.icon}
    </div>
    <div className="flex-1">
      <div className="font-semibold text-slate-900">{item.name}</div>
      <div className="text-indigo-500 font-bold text-sm">
        ${item.price}{' '}
        <span className="text-slate-400 font-normal">/ {item.period}</span>
      </div>
    </div>
    <button
      onClick={() => onRemove(item.id)}
      className="border border-slate-200 text-red-500 text-xs px-3 py-1.5 rounded-lg hover:bg-red-50 hover:border-red-300 transition"
    >
      🗑 Remove
    </button>
  </div>
)

export default CartItem

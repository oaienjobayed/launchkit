import { useState } from 'react'

const tagStyles = {
  popular: 'bg-yellow-100 text-yellow-800',
  new: 'bg-green-100 text-green-800',
  bestseller: 'bg-pink-100 text-pink-800',
}

const ProductCard = ({ product, onAdd }) => {
  const [added, setAdded] = useState(false)

  const handleBuy = () => {
    onAdd(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-3 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="text-3xl w-12 h-12 flex items-center justify-center bg-slate-50 rounded-xl">
          {product.icon}
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[product.tagType]}`}>
          {product.tag}
        </span>
      </div>
      <div className="font-bold text-slate-900 text-lg">{product.name}</div>
      <div className="text-slate-500 text-sm flex-1">{product.description}</div>
      <div className="text-2xl font-extrabold text-slate-900">
        ${product.price}{' '}
        <span className="text-sm font-normal text-slate-400">/ {product.period}</span>
      </div>
      <ul className="flex flex-col gap-1">
        {product.features.map((f, i) => (
          <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✓</span> {f}
          </li>
        ))}
      </ul>
      <button
        onClick={handleBuy}
        className={`mt-1 py-2.5 rounded-xl text-sm font-medium text-white transition ${
          added ? 'bg-emerald-500' : 'bg-slate-900 hover:bg-indigo-500'
        }`}
      >
        {added ? 'Added ✓' : 'Buy Now'}
      </button>
    </div>
  )
}

export default ProductCard

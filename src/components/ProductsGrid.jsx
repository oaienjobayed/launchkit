import product from '../data/products.json'
import ProductCard from './ProductCard'

const ProductsGrid = ({ onAdd }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {products.map(product => (
      <ProductCard key={product.id} product={product} onAdd={onAdd} />
    ))}
  </div>
)

export default ProductsGrid

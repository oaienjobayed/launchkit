import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import MainToggle from './components/MainToggle'
import StepsSection from './components/StepsSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])
  const [view, setView] = useState('products')

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      toast.info(`${product.name} is already in cart!`)
      return
    }
    setCart([...cart, product])
    toast.success(`${product.name} added to cart ✓`)
  }

  const removeFromCart = (id) => {
    const product = cart.find(item => item.id === id)
    setCart(cart.filter(item => item.id !== id))
    toast.error(`${product.name} removed from cart`)
  }

  const checkout = () => {
    setCart([])
    toast.success('Order placed! 🎉 Thanks for your purchase.')
  }

  return (
    <>
      <Navbar cartCount={cart.length} onCartClick={() => setView('cart')} />
      <Banner onBrowse={() => setView('products')} />
      <Stats />
      <MainToggle
        view={view}
        setView={setView}
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onCheckout={checkout}
      />
      <StepsSection />
      <PricingSection />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2800} />
    </>
  )
}

export default App

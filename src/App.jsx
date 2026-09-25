import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CustomBuildStudio from './components/CustomBuildStudio';
import FlagshipBuilds from './components/FlagshipBuilds';
import ComponentCatalog from './components/ComponentCatalog';
import PipelineStages from './components/PipelineStages';
import OrderTrackingModal from './components/OrderTrackingModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [activePreset, setActivePreset] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [activeTrackingId, setActiveTrackingId] = useState('BF-88219');
  const [notification, setNotification] = useState(null);

  // Initialize Route & Preset from URL
  useEffect(() => {
    const handleUrlSync = () => {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      const presetParam = params.get('preset');

      if (presetParam) {
        setActivePreset(presetParam);
      }

      if (path === '/builder' || path === '/custom-build' || path.startsWith('/builder')) {
        setCurrentRoute('builder');
      } else {
        setCurrentRoute('home');
      }
    };

    handleUrlSync();
    window.addEventListener('popstate', handleUrlSync);
    return () => window.removeEventListener('popstate', handleUrlSync);
  }, []);

  // Load saved cart from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('buildflow_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    try {
      localStorage.setItem('buildflow_cart', JSON.stringify(newCart));
    } catch (e) {
      console.error(e);
    }
  };

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddToCart = (title, price) => {
    const newItem = {
      id: Date.now(),
      title,
      price: Number(price) || 0,
      quantity: 1
    };
    const updated = [...cart, newItem];
    saveCart(updated);
    setIsCartOpen(true);
    showToast(`Added "${title}" to your shopping cart!`);
  };

  const handleRemoveFromCart = (id) => {
    const updated = cart.filter(item => item.id !== id);
    saveCart(updated);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const randomOrderId = 'BF-' + Math.floor(10000 + Math.random() * 90000);
    alert(`🎉 Order verified and queued for clean-room assembly!\n\nOrder ID: ${randomOrderId}\nPayment: Pay-on-Dispatch / UPI\n\nYour system is now scheduled in our ISO 9001 ESD clean room.`);
    saveCart([]);
    setIsCartOpen(false);
    setActiveTrackingId(randomOrderId);
    setIsTrackingOpen(true);
  };

  const navigateToBuilderWithPreset = (presetKey) => {
    setActivePreset(presetKey);
    setCurrentRoute('builder');
    window.history.pushState({}, '', `/builder?preset=${presetKey}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRoute = (route) => {
    setCurrentRoute(route);
    const targetUrl = route === 'builder' ? '/builder' : '/';
    window.history.pushState({}, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl border border-slate-700 animate-in slide-in-from-bottom duration-200">
          {notification}
        </div>
      )}

      {/* Main Navigation */}
      <Navbar 
        currentRoute={currentRoute}
        setCurrentRoute={navigateToRoute}
        cartCount={cart.reduce((sum, i) => sum + (i.quantity || 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Content Switching */}
      <main className="flex-1">
        {currentRoute === 'builder' ? (
          <CustomBuildStudio 
            onBackToHome={() => navigateToRoute('home')}
            onAddToCart={handleAddToCart}
            presetToLoad={activePreset}
          />
        ) : (
          <>
            <HeroSection 
              onStartCustomBuild={() => navigateToRoute('builder')}
            />

            <PipelineStages />

            <FlagshipBuilds 
              onAddToCart={handleAddToCart}
              onCustomizePreset={navigateToBuilderWithPreset}
            />

            {/* Quick Studio Callout Banner on Homepage */}
            <section className="py-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-1">Interactive Studio</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold">
                    Need Custom Specs with 8 Dedicated Hardware Slots?
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 max-w-xl">
                    Configure AM5/LGA1700 sockets, DDR5 speeds, PCIe 5.0 storage, chassis clearances, and PSU wattage headroom in real time with Indian Rupee (₹) pricing.
                  </p>
                </div>
                <button 
                  onClick={() => navigateToRoute('builder')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl shadow-lg shadow-red-600/30 transition-all whitespace-nowrap cursor-pointer shrink-0"
                >
                  Start Custom Build Studio &rarr;
                </button>
              </div>
            </section>

            <ComponentCatalog 
              onAddToCart={handleAddToCart}
              onConfigureInStudio={() => navigateToRoute('builder')}
            />
          </>
        )}
      </main>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      {/* Order Tracking Modal */}
      <OrderTrackingModal 
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        initialOrderId={activeTrackingId}
      />

      {/* Footer */}
      <Footer onNavigate={navigateToRoute} />

    </div>
  );
}

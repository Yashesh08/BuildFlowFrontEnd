import React from 'react';
import { formatINR } from '../utils/format';
import { ArrowRight, ShoppingBag, Settings2 } from 'lucide-react';

export default function FlagshipBuilds({ onAddToCart, onCustomizePreset }) {
  return (
    <section id="flagships" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
              <span>Ready-To-Ship Flagships</span>
              <span>&middot;</span>
              <span>Benchmarked & Sealed</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Factory Precision Builds
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Engineered for esports tournaments, deep learning clusters, and 3D simulation suites. Hand-assembled in anti-static clean rooms.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            <span>Prices displayed in Indian Rupees (&infin; GST Included)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Flagship 1: The Apex Phantom */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img 
                  src="/src/assets/images/pc_rig_gaming_flagship_1790308296832.jpg" 
                  alt="The Apex Phantom Custom Gaming Rig" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                  4K Competitive Tier
                </span>
                <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded">
                  240+ FPS in 4K
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">The Apex Phantom</h3>
                    <p className="text-xs text-slate-500 mt-1">Esports & High-Framerate 4K Gaming</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Starting At</span>
                    <span className="block font-display text-2xl font-bold font-mono text-red-600 tabular-nums">
                      {formatINR(279999)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Processor</span>
                    <span className="font-medium text-slate-900">AMD Ryzen 7 7800X3D (8C/16T, 5.0GHz)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Graphics</span>
                    <span className="font-medium text-slate-900">NVIDIA GeForce RTX 4090 24GB GDDR6X</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Motherboard</span>
                    <span className="font-medium text-slate-900">MSI MAG B650 TOMAHAWK WIFI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Memory</span>
                    <span className="font-medium text-slate-900">32GB (2x16GB) Corsair DDR5 6000MHz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Storage</span>
                    <span className="font-medium text-slate-900">Samsung 990 PRO 2TB PCIe 4.0 NVMe</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Power Supply</span>
                    <span className="font-medium text-slate-900">Corsair RM850x 850W Gold Fully Modular</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex items-center gap-3">
              <button 
                onClick={() => onAddToCart('The Apex Phantom (Flagship Gaming Rig)', 279999)}
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-xs transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Apex Phantom</span>
              </button>
              <button 
                onClick={() => onCustomizePreset('apex4k')}
                className="py-3 px-4 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap text-center cursor-pointer flex items-center gap-1.5"
              >
                <Settings2 className="w-4 h-4" />
                <span>Customize Specs</span>
              </button>
            </div>
          </div>

          {/* Flagship 2: The Tensor Forge Pro */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img 
                  src="/src/assets/images/pc_rig_workstation_pro_1790308311899.jpg" 
                  alt="The Tensor Forge Workstation" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                  AI Engineering & 3D Render
                </span>
                <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded">
                  CUDA Compute Ready
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">The Tensor Forge Pro</h3>
                    <p className="text-xs text-slate-500 mt-1">Enterprise Compute & Machine Learning</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Starting At</span>
                    <span className="block font-display text-2xl font-bold font-mono text-red-600 tabular-nums">
                      {formatINR(379999)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Processor</span>
                    <span className="font-medium text-slate-900">Intel Core i9-14900K (24C/32T, 6.0GHz)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Graphics</span>
                    <span className="font-medium text-slate-900">NVIDIA GeForce RTX 4090 24GB GDDR6X</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Motherboard</span>
                    <span className="font-medium text-slate-900">ASUS ROG MAXIMUS Z790 HERO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Memory</span>
                    <span className="font-medium text-slate-900">64GB (2x32GB) DDR5 6000MHz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Storage</span>
                    <span className="font-medium text-slate-900">Crucial T700 1TB Gen5 (11,700 MB/s)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Power Supply</span>
                    <span className="font-medium text-slate-900">Corsair RM1000x 1000W ATX 3.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex items-center gap-3">
              <button 
                onClick={() => onAddToCart('The Tensor Forge Pro (AI Workstation)', 379999)}
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-xs transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Tensor Forge</span>
              </button>
              <button 
                onClick={() => onCustomizePreset('workstation')}
                className="py-3 px-4 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap text-center cursor-pointer flex items-center gap-1.5"
              >
                <Settings2 className="w-4 h-4" />
                <span>Customize Specs</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

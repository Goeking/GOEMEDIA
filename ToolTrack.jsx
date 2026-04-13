import React, { useState, useEffect } from 'react';
import { Activity, AlertCircle, MapPin, Battery, Package, TrendingUp, ArrowUpRight, Menu, X, Shield, Zap, Clock } from 'lucide-react';

export default function ToolTrack() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [assets, setAssets] = useState([
    { id: 1, name: 'Excavator A1', status: 'active', lat: 40.7128, lng: -74.0060, battery: 92 },
    { id: 2, name: 'Bulldozer B2', status: 'active', lat: 40.7580, lng: -73.9855, battery: 78 },
    { id: 3, name: 'Crane C3', status: 'idle', lat: 40.7489, lng: -73.9680, battery: 45 },
    { id: 4, name: 'Mixer D4', status: 'active', lat: 40.7505, lng: -73.9972, battery: 88 },
  ]);

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'movement', asset: 'Crane C3', message: 'Unauthorized movement detected', time: '5m ago' },
    { id: 2, type: 'battery', asset: 'Mixer D4', message: 'Low battery - 15% remaining', time: '12m ago' },
    { id: 3, type: 'missing', asset: 'Roller E5', message: 'Equipment not checked in', time: '2h ago' },
  ]);

  const [metrics, setMetrics] = useState({
    activeAssets: 847,
    onSite: 612,
    alerts: 3,
  });

  // Simulate GPS updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prev => prev.map(asset => ({
        ...asset,
        lat: asset.lat + (Math.random() - 0.5) * 0.001,
        lng: asset.lng + (Math.random() - 0.5) * 0.001,
        battery: Math.max(10, asset.battery - Math.random() * 2),
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Simulate alerts
  useEffect(() => {
    const alertInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newAlert = {
          id: Date.now(),
          type: ['movement', 'battery', 'missing'][Math.floor(Math.random() * 3)],
          asset: assets[Math.floor(Math.random() * assets.length)].name,
          message: 'New alert generated',
          time: 'just now',
        };
        setAlerts(prev => [newAlert, ...prev.slice(0, 2)]);
      }
    }, 8000);

    return () => clearInterval(alertInterval);
  }, [assets]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-gray-950/50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold">ToolTrack</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#docs" className="text-gray-300 hover:text-white transition">Docs</a>
          </div>

          <div className="hidden md:flex gap-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition">Sign In</button>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition font-semibold">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-purple-500/20 p-4 space-y-4">
            <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">Start Free Trial</button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Stop Losing $50K+ in Equipment Every Year
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            GPS tracking, RFID technology, and real-time analytics — built for construction companies managing 200+ assets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-purple-500/20">
          <p className="text-gray-400 mb-8">Trusted by leading construction firms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-2"><Shield size={20} /> Turner Construction</div>
            <div className="flex items-center gap-2"><Shield size={20} /> Bechtel Group</div>
            <div className="flex items-center gap-2"><Shield size={20} /> Skanska USA</div>
            <div className="flex items-center gap-2"><Shield size={20} /> McCarthy Holdings</div>
          </div>
        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/50 backdrop-blur border border-purple-500/20 rounded-2xl p-8 space-y-8">
          {/* Top Metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            <MetricCard
              icon={<Package size={32} className="text-purple-400" />}
              label="Active Assets"
              value={metrics.activeAssets}
              change="+12%"
            />
            <MetricCard
              icon={<MapPin size={32} className="text-blue-400" />}
              label="On-site Equipment"
              value={metrics.onSite}
              change="+8%"
            />
            <MetricCard
              icon={<AlertCircle size={32} className="text-red-400" />}
              label="Active Alerts"
              value={metrics.alerts}
              change="−2%"
            />
          </div>

          {/* Live Map & System Status */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Live Map */}
            <div className="md:col-span-2 bg-gray-800/50 border border-purple-500/10 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-blue-400" />
                Live GPS Map View
              </h3>
              <div className="w-full h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg relative overflow-hidden border border-purple-500/10">
                {/* Mock Map */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Grid */}
                  {[...Array(5)].map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 20} x2="100" y2={i * 20} stroke="rgba(168,85,247,0.1)" strokeWidth="0.5" />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="100" stroke="rgba(168,85,247,0.1)" strokeWidth="0.5" />
                  ))}

                  {/* Equipment Dots */}
                  {assets.map(asset => (
                    <g key={asset.id}>
                      <circle
                        cx={(asset.lng + 74.0060) * 500}
                        cy={(asset.lat - 40.7128) * 500}
                        r="2.5"
                        fill={asset.status === 'active' ? '#a855f7' : '#3b82f6'}
                        opacity="0.8"
                      />
                      <circle
                        cx={(asset.lng + 74.0060) * 500}
                        cy={(asset.lat - 40.7128) * 500}
                        r="4"
                        fill="none"
                        stroke={asset.status === 'active' ? '#a855f7' : '#3b82f6'}
                        strokeWidth="1"
                        opacity="0.4"
                      />
                    </g>
                  ))}
                </svg>

                <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur px-3 py-2 rounded-lg text-sm">
                  🔴 {assets.filter(a => a.status === 'active').length} Active • 📍 Last updated: now
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-gray-800/50 border border-purple-500/10 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-lg">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">GPS Tracking</span>
                  <span className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">RFID Network</span>
                  <span className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Database</span>
                  <span className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Operational
                  </span>
                </div>
                <div className="pt-4 border-t border-purple-500/10 text-sm text-gray-400">
                  Last sync: <span className="text-purple-400">2 seconds ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts Panel */}
          <div className="bg-gray-800/50 border border-purple-500/10 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <AlertCircle size={20} className="text-red-400" />
              Recent Alerts
            </h3>
            <div className="space-y-3">
              {alerts.map(alert => (
                <div key={alert.id} className="flex items-start justify-between p-4 bg-gray-700/30 rounded-lg border border-red-500/20 hover:border-red-500/40 transition">
                  <div className="flex-1">
                    <p className="font-medium text-red-300">{alert.message}</p>
                    <p className="text-sm text-gray-400">Asset: {alert.asset}</p>
                  </div>
                  <span className="text-xs text-gray-400">{alert.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assets List */}
          <div className="bg-gray-800/50 border border-purple-500/10 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4">Active Equipment</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-purple-500/20">
                  <tr className="text-gray-400">
                    <th className="text-left py-3">Equipment</th>
                    <th className="text-left py-3">Status</th>
                    <th className="text-left py-3">Battery</th>
                    <th className="text-left py-3">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-500/10">
                  {assets.map(asset => (
                    <tr key={asset.id} className="hover:bg-purple-500/5 transition">
                      <td className="py-3">{asset.name}</td>
                      <td className="py-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          asset.status === 'active' 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {asset.status === 'active' ? '🟢 Active' : '🔵 Idle'}
                        </span>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <Battery size={16} className={asset.battery > 50 ? 'text-green-400' : 'text-yellow-400'} />
                          {Math.round(asset.battery)}%
                        </div>
                      </td>
                      <td className="py-3 text-gray-400">{asset.lat.toFixed(4)}, {asset.lng.toFixed(4)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 ToolTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function MetricCard({ icon, label, value, change }) {
  return (
    <div className="bg-gray-800/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition">
      <div className="flex items-start justify-between mb-4">
        {icon}
        <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
          <ArrowUpRight size={16} /> {change}
        </span>
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-3xl font-bold mt-2">{value.toLocaleString()}</p>
    </div>
  );
}
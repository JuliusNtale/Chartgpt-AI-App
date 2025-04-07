import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ChartList = ({ closeSidebar }) => {
  // Sample data - replace with your actual data source
  const recentCharts = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Chart ${i + 1}`
  }));

  const menuItems = [
    { type: 'link', to: '/dashboard', label: 'New Chart' },
    { 
      type: 'external', 
      href: 'https://juliusntale.hillsviewproduction.com/contact', 
      label: 'Helpdesk' 
    }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Main Menu */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-300">Dashboard Menu</h2>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.type === 'link' ? (
                  <Link
                    to={item.to}
                    onClick={closeSidebar}
                    className="block px-3 py-2 bg-gray-800 rounded hover:bg-orange-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeSidebar}
                    className="block px-3 py-2 bg-gray-800 rounded hover:bg-orange-500 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Recent Charts */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-gray-300">Recent Charts</h2>
          <ul className="space-y-1">
            {recentCharts.map((chart, index) => (
              <motion.li
                key={chart.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + menuItems.length) * 0.1 }}
              >
                <Link
                  to={`/dashboard/charts/${chart.id}`}
                  onClick={closeSidebar}
                  className="block px-3 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                >
                  {chart.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>

      {/* Upgrade Banner - Fixed at Bottom */}
      <div className="p-1 bg-black hover:bg-blue-700 transition-colors cursor-pointer" 
           onClick={() => window.location.href = '/upgrade'}>
        <div className="pl-2  flex items-center gap-3">
          <img src="/logo1.png" alt="Pro Upgrade" className="w-10 h-10" />
          <div>
            <h3 className="font-medium text-white">Upgrade to HillsviewPro</h3>
            <p className="text-xs text-blue-200">To unlock premium features</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartList;
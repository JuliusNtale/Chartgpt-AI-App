import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ChartList = memo(({ closeSidebar }) => {
  // Sample data - replace with your actual data source
  const recentCharts = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Chart ${i + 1}`,
    type: i % 2 === 0 ? 'Bar Chart' : 'Line Chart',
    lastModified: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString()
  }));

  const menuItems = [
    { 
      type: 'link', 
      to: '/dashboard', 
      label: 'New Chart',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      )
    },
    { 
      type: 'external', 
      href: 'https://juliusntale.hillsviewproduction.com/contact', 
      label: 'Help & Support',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Navigation Menu */}
      <div className="p-6">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wide">
          Quick Actions
        </h3>
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.type === 'link' ? (
                <Link
                  to={item.to}
                  onClick={closeSidebar}
                  className="group flex items-center space-x-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                >
                  <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeSidebar}
                  className="group flex items-center space-x-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                >
                  <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-gray-200 dark:border-gray-700"></div>

      {/* Recent Charts */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wide">
          Recent Charts
        </h3>
        <div className="space-y-2">
          {recentCharts.map((chart, index) => (
            <motion.div
              key={chart.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 2) * 0.1 }}
            >
              <Link
                to={`/dashboard/charts/${chart.id}`}
                onClick={closeSidebar}
                className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-gray-700/50 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                      {chart.name}
                    </h4>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {chart.type}
                    </p>
                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                      {chart.lastModified}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
});

ChartList.displayName = 'ChartList';

export default ChartList;
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
          <h2 className="text-lg font-semibold mb-3 text-blue-100">Recent Charts</h2>
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
                  className="block px-3 py-2 rounded hover:bg-blue-500 transition-colors text-sm"
                >
                  {chart.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>

      {/* Upgrade Banner - Fixed at Bottom */}
      <div 
        className="p-2 bg-black hover:bg-orange-500 transition-colors cursor-pointer"
        onClick={() => window.location.href = '/upgrade'}
      >
        <div className="flex items-center gap-3 p-2">
          <img 
            src="/logo1.png" 
            alt="Pro Upgrade" 
            className="w-10 h-10" 
            loading="lazy"
          />
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
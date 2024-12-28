import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, FolderKanban, Wrench } from 'lucide-react';

const navItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/admin/profile', icon: User, label: 'Profile' },
  { to: '/admin/projects', icon: FolderKanban, label: 'Projects' },
  { to: '/admin/skills', icon: Wrench, label: 'Skills' },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h2 className="text-xl font-semibold">Admin Panel</h2>
      </div>
      <nav className="space-y-1 px-3">
        {navItems.map(({ to, icon: Icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`
            }
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
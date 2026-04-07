"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken');
    setToken(storedToken);
    
    // Redirect logic: if no token and not on login page, go to login
    if (!storedToken && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
    
    setLoading(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
    router.push('/admin/login');
  };

  if (loading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading Admin Panel...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-900 text-white shadow-md py-4 px-6 md:px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">Aimhop Admin</h1>
        {token && (
          <button 
            onClick={handleLogout}
            className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
          >
            Logout
          </button>
        )}
      </header>
      <main className="flex-grow p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}

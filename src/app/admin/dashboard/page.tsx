"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface Lead {
  _id: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  city: string;
  status: string;
  createdAt: string;
}

const Dashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const router = useRouter();

  const getBaseURL = () => process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchLeads(token);
  }, [router]);

  const fetchLeads = async (token: string) => {
    try {
      const response = await axios.get(`${getBaseURL()}/leads`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeads(response.data);
    } catch (error: any) {
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
      }
      toast.error('Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const token = localStorage.getItem('adminToken');
    if (!token) return;

    try {
      await axios.patch(`${getBaseURL()}/leads/${id}`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Status updated');
      fetchLeads(token); // Refresh list
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const filteredLeads = filter === 'All' ? leads : leads.filter(l => l.status === filter);

  if (loading) {
    return <div className="text-center py-20 bg-white rounded-2xl shadow-sm">Loading leads...</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Lead Management</h2>
        
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          {['All', 'New', 'Contacted', 'Converted'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === status ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-100">
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Student Name</th>
              <th className="p-4 font-semibold">Contact Info</th>
              <th className="p-4 font-semibold">Course & City</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-gray-500">No leads found.</td>
              </tr>
            ) : (
              filteredLeads.map(lead => (
                <tr key={lead._id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 whitespace-nowrap font-medium text-gray-900">
                    {lead.name}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{lead.phone}</div>
                    <div className="text-sm text-gray-500">{lead.email}</div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-primary-600">{lead.course}</div>
                    <div className="text-sm text-gray-500">{lead.city}</div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${lead.status === 'New' ? 'bg-blue-100 text-blue-800' : ''}
                      ${lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${lead.status === 'Converted' ? 'bg-green-100 text-green-800' : ''}
                    `}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 whitespace-nowrap text-sm">
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead._id, e.target.value)}
                      className="bg-gray-50 border border-gray-200 text-gray-700 rounded-md px-2 py-1 outline-none focus:ring-1 focus:ring-primary-500 text-sm"
                    >
                      <option value="New">Mark New</option>
                      <option value="Contacted">Mark Contacted</option>
                      <option value="Converted">Mark Converted</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

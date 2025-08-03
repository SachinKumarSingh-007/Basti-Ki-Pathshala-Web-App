
import React from 'react';
import type { Applicant } from '../types';
import Card from '../components/ui/Card';

interface AdminPageProps {
  applicants: Applicant[];
}

const AdminPage: React.FC<AdminPageProps> = ({ applicants }) => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-primary-dark mb-6">Applicant Submissions</h2>
      {applicants.length === 0 ? (
        <p className="text-center text-neutral-500 py-8">No applications have been submitted yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Contact</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Role</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Submitted On</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Reason</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {applicants.slice().reverse().map((applicant) => (
                <tr key={applicant.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-neutral-900">{applicant.fullName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{applicant.email}</div>
                    <div className="text-sm text-neutral-500">{applicant.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${applicant.role === 'Intern' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                      {applicant.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    {new Date(applicant.submittedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 max-w-sm">
                    <p className="text-sm text-neutral-600 whitespace-normal" title={applicant.reason}>{applicant.reason}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
};

export default AdminPage;

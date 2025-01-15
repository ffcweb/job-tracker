import React, { useState } from 'react';

function ApplicationTable({
  applications,
  handleDelete,
  handleStatusChange,
  currentPage,
  paginate,
  totalApplications,
  applicationsPerPage,
}) {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedApps = [...applications].sort((a, b) => {
    if (!sortConfig.key) return 0;

    // Date sorting
    if (sortConfig.key === 'date') {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sortConfig.direction === 'asc') {
        return dateA - dateB;
      }
      return dateB - dateA;
    }

    // Sorting for other fields like 'role', 'company', and 'status'
    if (sortConfig.direction === 'asc') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });

  const totalPages = Math.ceil(totalApplications / applicationsPerPage);

  return (
    <div className=''>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort('role')}>Role</th>
            <th onClick={() => handleSort('company')}>Company</th>
            <th onClick={() => handleSort('status')}>Status</th>
            <th onClick={() => handleSort('date')}>Date Applied</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedApps.map((app) => (
            <tr key={app.id}>
              <td>{app.role}</td>
              <td>{app.company}</td>
              <td>
                <select
                  value={app.status}
                  onChange={(e) => handleStatusChange(app.id, e.target.value)}
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td>{app.date}</td>
              <td>
                <button onClick={() => handleDelete(app.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ApplicationTable;

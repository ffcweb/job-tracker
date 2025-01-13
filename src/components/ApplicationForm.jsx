import React, { useState } from 'react';

function ApplicationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    role: '',
    company: '',
    status: 'Applied',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApp = { ...formData, id: Date.now() };
    onSubmit(newApp);
    setFormData({
      role: '',
      company: '',
      status: 'Applied',
      date: '',
    });
  };

  return (
    <form className='pt-5 pb-2' onSubmit={handleSubmit}>
      <input className='m-2'
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
      />
      <input className='m-2'
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
      />
      <input className='m-2'
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <select className='m-2' name="status" value={formData.status} onChange={handleChange}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button className='m-2 ' type="submit">Add Application</button>
    </form>
  );
}

export default ApplicationForm;

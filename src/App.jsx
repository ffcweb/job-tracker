import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ApplicationForm from './components/ApplicationForm';
import ApplicationTable from './components/ApplicationTable';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

function App() {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [applicationsPerPage] = useState(15);

  // Fetch from localStorage
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem('applications')) || [];
    setApplications(storedApps);
  }, []);

  // Handle form submission
  const handleAddApplication = (newApp) => {
    const newApplications = [...applications, newApp];
    setApplications(newApplications);
    localStorage.setItem('applications', JSON.stringify(newApplications));
  };

  // Handle delete action
  const handleDelete = (id) => {
    const newApplications = applications.filter((app) => app.id !== id);
    setApplications(newApplications);
    localStorage.setItem('applications', JSON.stringify(newApplications));
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedApplications = applications.map((app) =>
      app.id === id ? { ...app, status: newStatus } : app
    );
    setApplications(updatedApplications);
    localStorage.setItem('applications', JSON.stringify(updatedApplications));
  };

  // Pagination logic
  const indexOfLastApp = currentPage * applicationsPerPage;
  const indexOfFirstApp = indexOfLastApp - applicationsPerPage;
  const currentApplications = applications.slice(indexOfFirstApp, indexOfLastApp);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <div className="App d-flex flex-column min-vh-100">
       <Header />

       <HeroSection />
       
       <div className='container flex-grow-1'>
          {/* <h1 >Job Application Dashboard</h1> */}
          <ApplicationForm onSubmit={handleAddApplication} />
          <ApplicationTable 
            applications={currentApplications}
            handleDelete={handleDelete}
            currentPage={currentPage}
            handleStatusChange={handleStatusChange}
            paginate={paginate}
            totalApplications={applications.length}
            applicationsPerPage={applicationsPerPage}
          />
        </div>
      <Footer />
    </div>
  );
}

export default App;

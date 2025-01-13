import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        &copy; {new Date().getFullYear()} Job Tracker. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

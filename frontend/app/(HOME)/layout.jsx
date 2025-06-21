// app/dashboard/layout.jsx (Example if dashboard had header/footer)
import React from 'react';
// import Header from '../_components/Header'; // Assuming Header is in _components
// import Footer from '../_components/Footer'; // Assuming Footer is in _components

function DashboardLayout({ children }) {
  return (
    <div className="">
        {/* <Header /> // Often dashboards have a different header */}
        <div className="flex"> {/* Example layout with sidebar and main content */}
            {/* <Sidebar /> */}
            <main className="flex-1">{children}</main> {/* Main content area */}
        </div>
        {/* <Footer /> // Often dashboards don't have a footer, or a different one */}
    </div>
  );
}

export default DashboardLayout;
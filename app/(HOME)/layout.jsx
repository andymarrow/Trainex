// app/dashboard/layout.jsx (Example if dashboard had header/footer)
import React from 'react';
import Header from './_components/Header'; // Assuming Header is in _components
import Footer from './_components/Footer'; // Assuming Footer is in _components

function DashboardLayout({ children }) {
  return (
    <div className="">
       <Header/>
        <div className="flex"> 
            {/* <Sidebar /> */}
            
            <main className="flex-1">{children}</main> {/* Main content area */}
        </div>
         <Footer/>
    </div>
  );
}

export default DashboardLayout;
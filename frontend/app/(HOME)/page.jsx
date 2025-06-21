// app/page.jsx
import React from "react";
import Header from "./_components/Header"; // Make sure import path is correct
import Hero from "./_components/Hero";
// import Footer from "./_components/Footer"; // Uncomment when Footer is ready

export default function Home() {
  return (
    // Use a main container if needed, adjust padding/margins
    <div className="min-h-screen">
      <Header/>
      <main> {/* Wrap main content in <main> for semantics */}
        <Hero/>
        {/* Other sections go here */}
      </main>
      {/* <Footer/> */}
    </div>
  );
}
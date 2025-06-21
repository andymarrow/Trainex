// app/page.js

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import CoursesSection from "./_components/CoursesSection";
import CtaSection from "./_components/CtaSection";
import OurInstructors from "./_components/OurInstructors"; // Import the new component
// import Footer from "./_components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">
        <Hero/>
        <CoursesSection />
        <CtaSection />
        {/* <OurInstructors/> */}

      </main>
      {/* <Footer/> */}
    </div>
  );
}
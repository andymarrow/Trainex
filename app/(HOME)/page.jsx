// app/page.js

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import CoursesSection from "./_components/CoursesSection";
import CtaSection from "./_components/CtaSection";
import Testimonials from "./_components/Testimonials";
import OurInstructors from "./_components/OurInstructors"; // Import the new component
import Aboutus from "./_components/Aboutus";
import LatestBlogs from "./_components/LatestBlogs";
import Contactus from "./_components/Contactus";
import Partners from "./_components/Partners";
import Footer from "./_components/Footer";
// import Footer from "./_components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">
        <Hero/>
        <CoursesSection />
        <CtaSection />
        <OurInstructors/>
        <Aboutus />
        {/* <Testimonials/>  */}
        {/* the testimonials section is messing up with the responsivness some how i dont know why  */}
        <LatestBlogs/>
        <Contactus/>
        <Partners/>

      </main>
      <Footer/>
    </div>
  );
}
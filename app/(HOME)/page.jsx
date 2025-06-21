import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
// import Footer from "./_components/Footer"; // Uncomment when Footer is ready


export default function Home() {
  return (

    <div className="min-h-screen flex flex-col"> 
      <Header/>
      <main className="flex-grow"> 
        <Hero/>

      </main>
      {/* <Footer/> */}
    </div>
  );
}
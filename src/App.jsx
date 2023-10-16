import React, { useState } from "react";
import Header from "./components/Header";
import Logos from "./components/Logos";
import Residencies from "./components/Residencies";
import Value from "./components/Value";
import Contact from "./components/Contact";
import Started from "./components/Started";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className=" h-screen w-full">
        <Header />
        <Logos />
        <Residencies />
        <Value />
        <Contact />
        <Started />
        <Footer />
      </div>
    </>
  );
}

export default App;

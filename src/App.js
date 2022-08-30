import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/TechElements/ScrollToTop";

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Hardware from "./components/Hardware";
import DevicePage from "./components/Hardware/DevicePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/hardware/:device" element={<DevicePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

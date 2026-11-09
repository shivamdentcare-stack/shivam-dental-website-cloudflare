import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import CategoryPage from "./pages/CategoryPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route
              path="/cosmetic-dentistry"
              element={
                <CategoryPage
                  title="Cosmetic Dentistry"
                  subtitle="Smile makeovers, veneers, whitening and digital smile design — crafted to bring out your best smile."
                  category="cosmetic"
                />
              }
            />
            <Route
              path="/general-dentistry"
              element={
                <CategoryPage
                  title="General Dentistry"
                  subtitle="Routine procedures, fillings, root canals, cleanings and extractions to keep every smile healthy."
                  category="general"
                />
              }
            />
            <Route
              path="/implant-dentistry"
              element={
                <CategoryPage
                  title="Implant Dentistry"
                  subtitle="Permanent, natural-feeling tooth replacements — single, multiple, full-mouth and basal implants by Dr. Parashar Desai."
                  category="implant"
                />
              }
            />
            <Route
              path="/dentures"
              element={
                <CategoryPage
                  title="Dentures"
                  subtitle="Comfortable, well-fitted complete, partial and implant-retained dentures — restoring chewing function and confidence."
                  category="dentures"
                />
              }
            />
            <Route
              path="/orthodontics"
              element={
                <CategoryPage
                  title="Orthodontics (Braces Treatment)"
                  subtitle="Straighten teeth and correct bites with traditional braces or virtually invisible clear aligners."
                  category="ortho"
                />
              }
            />
          </Routes>
        </Layout>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;

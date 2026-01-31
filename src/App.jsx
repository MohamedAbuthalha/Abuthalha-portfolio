import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';


export default function App() {
  return (
    <HelmetProvider>
      <div className='font-sora scroll-smooth overflow-x-hidden'>
        {/* SEO Meta Tags */}
        <Helmet>
          <title>abuthalha</title>
          <meta
            name="description"
            content="Welcome to abuthalha's portfolio – showcasing React projects, web development skills, and design experience."
          />
          <meta
            name="keywords"
            content="abuthalha, portfolio, react developer, web developer, front-end developer"
          />

          {/* Open Graph / Social Sharing */}
          <meta property="og:title" content="abuthalha" />
          <meta
            property="og:description"
            content="Explore abuthalha's projects, skills, and experience in web development."
          />
          <meta property="og:url" content="https://YOUR_USERNAME.github.io/YOUR_REPO" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/preview.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="abuthalha" />
          <meta
            name="twitter:description"
            content="Explore abuthalha's projects, skills, and experience in web development."
          />
          <meta name="twitter:image" content="/preview.png" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://YOUR_USERNAME.github.io/YOUR_REPO" />
        </Helmet>

        {/* Main Components */}
        
        <Navbar />
        <Home />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

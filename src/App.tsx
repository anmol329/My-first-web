/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Transformations from './components/Transformations';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#1A0000] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Facilities />
      <Transformations />
      <Reviews />
      <Pricing />
      <Contact />
      <CTASection />
      <Footer />
    </div>
  );
}

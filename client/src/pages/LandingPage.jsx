import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhyChooseUsGraph from "../components/WhyChooseUs";

export default function LandingPage() {
  return (
<div className="font-sans text-black scroll-smooth bg-white min-h-screen">
  <Navbar />
  <main>
    <Hero /> {/* fills first viewport */}
    <WhyChooseUsGraph/>
    <Services />
    <CTA />
  </main>
  <Footer />
</div>


  );
}

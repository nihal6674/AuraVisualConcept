

import { motion } from "framer-motion";

const services = [
  {
    title: "Branding",
    tagline: "Make your brand unforgettable",
    points: ["Logo & visual identity", "Color palette & typography", "Brand guidelines for consistency"],
    backgroundImage: "https://plus.unsplash.com/premium_photo-1728457508551-8973fedacaa4?auto=format&fit=crop&q=80&w=1332",
  },
  {
    title: "Marketing",
    tagline: "Grow your audience strategically",
    points: ["Social media campaigns", "Content strategy & creation", "Performance tracking & analytics"],
    backgroundImage: "https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?auto=format&fit=crop&q=80&w=784",
  },
  {
    title: "Advertising",
    tagline: "Reach the right people at the right time",
    points: ["Google Ads & Meta campaigns", "Targeted ad creatives", "ROI-focused strategy"],
    backgroundImage: "https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?auto=format&fit=crop&q=80&w=695",
  },
  {
    title: "Logo Design",
    tagline: "Distinctive logos that tell your story",
    points: ["Custom, original designs", "Vector & scalable files", "Brand recognition focused"],
    backgroundImage: "https://plus.unsplash.com/premium_photo-1706140675000-b76453fd27c0?auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Websites",
    tagline: "Websites that convert",
    points: ["Responsive & fast", "SEO optimized", "Modern design & UX"],
    backgroundImage: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?auto=format&fit=crop&q=80&w=1170",
  },
  {
    title: "Photography",
    tagline: "Capture moments that resonate",
    points: ["Professional studio & outdoor shoots", "Product & lifestyle photography", "High-quality edited images"],
    backgroundImage: "https://images.unsplash.com/photo-1527606078995-42486f991014?auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Videography",
    tagline: "Videos that tell your story",
    points: ["Promotional & brand videos", "Cinematography & editing", "Social media optimized formats"],
    backgroundImage: "https://images.unsplash.com/photo-1599240211563-17590b1af857?auto=format&fit=crop&q=60&w=600",
  },
];



const wordColors = ["red", "black", "gray"];

function ColorfulTagline({ text }) {
  return (
    <span className="inline-block text-center">
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="mx-1"
          style={{ color: wordColors[i % wordColors.length] }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      {/* Heading + description animation */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Creative and digital solutions that elevate your brand and drive results.
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative w-80 flex flex-col rounded-3xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Background image */}
            <div
              className="w-full h-80 md:h-96 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${service.backgroundImage})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-white text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {service.title}
                </motion.h3>
              </div>
            </div>

          {/* Content below image */}
<div className="p-6 bg-white flex flex-col h-full">
  {/* Colored tagline */}
  <p className="mb-4 font-bold text-center text-lg">
    <ColorfulTagline text={service.tagline} />
  </p>

  {/* Points list aligned left */}
  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 text-left">
    {service.points.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>

  {/* Learn More button */}
  <button className="mt-auto border border-gray-800 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 self-center">
    Explore
  </button>
</div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

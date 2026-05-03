import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0B0B0B] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden glass-card p-2 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym Training" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            {/* Background decorative square */}
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square border-2 border-accent-green z-0 hidden md:block"></div>
            {/* Floating stats card */}
            <div className="absolute -right-8 bottom-12 glass-card p-6 z-20 hidden md:block rounded backdrop-blur-xl">
              <div className="text-4xl font-heading text-accent-green">10+</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-accent-green font-bold tracking-widest uppercase text-sm mb-4">About Us</h4>
              <h2 className="text-5xl md:text-7xl font-heading text-white leading-[0.9] mb-6">
                WE ARE NOT JUST <br/>
                <span className="text-transparent text-gradient">A GYM.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
                We build discipline, strength, and confidence. Our state-of-the-art facility is designed for those who are serious about transforming their lives. Your excuses end here.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Certified Professional Trainers', 'Result-Driven Personalized Plans', 'Premium Hygienic Environment'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="w-6 h-6 rounded-full bg-accent-green/10 flex items-center justify-center mr-3 shrink-0">
                      <ChevronRight size={14} className="text-accent-green" />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#services" className="inline-flex items-center text-white font-bold uppercase tracking-wider text-sm hover:text-accent-green transition-colors group">
                Explore Our Services
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=3270&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0000] via-[#1A0000]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0000] pb-32 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading leading-[0.85] text-white"
          >
            TRANSFORM <br />
            <span className="text-transparent text-gradient">YOUR BODY.</span> <br />
            TRANSFORM <br />
            <span className="text-accent-red">YOUR LIFE.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl text-gray-300 md:max-w-xl border-l-2 border-accent-red pl-4"
          >
            Join the most result-driven gym in the city. Hardwork, discipline, and the best equipment awaits you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#pricing" className="px-8 py-4 bg-accent-red text-white font-bold uppercase tracking-wider text-lg hover:bg-red-600 transition-colors text-center shrink-0">
              Join Now
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider text-lg hover:border-accent-green hover:text-accent-green transition-colors text-center shrink-0 backdrop-blur-sm">
              Free Trial
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

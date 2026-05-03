import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center" style={{ minHeight: '60vh' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-[#0B0B0B]/80"></div>
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#0B0B0B] to-transparent"></div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center border border-white/10 p-12 bg-[#0B0B0B]/40 backdrop-blur-sm rounded">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading text-white leading-none mb-6">
            START <span className="text-accent-green">TODAY.</span> <br/>
            DON'T WAIT FOR TOMORROW.
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Take the first step towards a stronger, healthier, and more confident you. Join our community and unleash your true potential.
          </p>
          <a href="#contact" className="inline-block px-12 py-5 bg-accent-green text-primary-black font-bold uppercase tracking-widest text-lg hover:bg-[#00d672] transition-colors rounded shadow-[0_0_30px_rgba(0,255,136,0.3)]">
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

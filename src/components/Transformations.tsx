import { motion } from 'motion/react';

const transformations = [
  {
    before: "https://images.unsplash.com/photo-1573030485906-8805fdbfe756?w=600&auto=format&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60",
    name: "Alex M.",
    result: "Lost 25kg in 6 months"
  },
  {
    before: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&auto=format&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop&q=60",
    name: "Sarah T.",
    result: "Gained lean muscle"
  }
]

export default function Transformations() {
  return (
    <section id="results" className="py-24 bg-[#0B0B0B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent-green font-bold tracking-widest uppercase text-sm mb-4">Success Stories</h4>
          <h2 className="text-5xl md:text-7xl font-heading text-white mb-6">REAL PEOPLE. <br className="md:hidden"/>REAL RESULTS.</h2>
          <p className="text-gray-400 text-lg">Build the body you deserve. See what our members have achieved through dedication and our expert guidance.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {transformations.map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: idx * 0.2 }}
               className="glass-card p-4 rounded"
             >
                <div className="grid grid-cols-2 gap-2 relative">
                  <div className="relative group">
                    <img src={item.before} alt="Before" className="w-full aspect-[3/4] object-cover rounded brightness-75 grayscale sepia-[0.2]" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Before</div>
                  </div>
                  <div className="relative group">
                    <img src={item.after} alt="After" className="w-full aspect-[3/4] object-cover rounded" />
                    <div className="absolute top-4 right-4 bg-accent-green text-primary-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">After</div>
                  </div>
                </div>
                <div className="pt-6 pb-2 text-center border-t border-white/5 mt-4">
                  <h3 className="text-xl font-heading tracking-wide text-white">{item.name}</h3>
                  <p className="text-accent-green font-medium text-sm mt-1 uppercase tracking-wider">{item.result}</p>
                </div>
             </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-heading text-white mb-6">YOUR EXCUSES END HERE.</h3>
          <a href="#contact" className="inline-block px-10 py-5 bg-transparent border-2 border-accent-green text-accent-green font-bold uppercase tracking-widest text-lg hover:bg-accent-green hover:text-primary-black transition-all rounded">
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
}

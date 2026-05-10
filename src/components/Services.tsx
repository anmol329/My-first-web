import { motion } from 'motion/react';
import { Dumbbell, HeartPulse, UserCircle, Activity, Apple } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Weight Training',
    description: 'Build muscle mass and strength with our comprehensive free weights and modern machines.'
  },
  {
    icon: HeartPulse,
    title: 'Cardio Training',
    description: 'Improve cardiovascular health and burn fat with our top-tier treadmills, ellipticals, and bikes.'
  },
  {
    icon: UserCircle,
    title: 'Personal Training',
    description: 'Get customized 1-on-1 coaching tailored to your specific fitness goals and capabilities.'
  },
  {
    icon: Activity,
    title: 'Functional Training',
    description: 'Enhance your daily movement patterns with kettlebells, battle ropes, and TRX systems.'
  },
  {
    icon: Apple,
    title: 'Diet & Nutrition',
    description: 'Fuel your progress with expert nutritional guidance and customized macro plans.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#1A0000] relative">
      <div className="absolute inset-0 bg-white/5 opacity-30 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent-red font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h4>
          <h2 className="text-5xl md:text-7xl font-heading text-white">WHAT WE OFFER</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded hover:border-accent-red/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-red/10 transition-colors">
                  <Icon size={28} className="text-white group-hover:text-accent-red transition-colors" />
                </div>
                <h3 className="text-2xl font-heading tracking-wide text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
          
          {/* Join CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 5 * 0.1 }}
            className="p-8 rounded bg-accent-red flex flex-col justify-center items-center text-center text-white"
          >
            <h3 className="text-3xl font-heading tracking-wide text-white mb-2">READY TO START?</h3>
            <p className="text-white/90 font-medium mb-6 text-sm">No pain. No progress.</p>
            <a href="#contact" className="px-6 py-3 bg-white text-primary-black font-bold uppercase tracking-wider text-xs hover:bg-gray-200 transition-colors">
              Get Your Plan
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

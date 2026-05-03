import { motion } from 'motion/react';
import { Wind, Shield, Lock, Droplets, Dumbbell } from 'lucide-react';

const facilities = [
  { icon: Wind, name: "Air Conditioned", desc: "Fully AC environment" },
  { icon: Shield, name: "CCTV Security", desc: "24/7 Monitored premises" },
  { icon: Lock, name: "Locker Room", desc: "Secure personal storage" },
  { icon: Droplets, name: "Changing Room", desc: "Clean & hygienic" },
  { icon: Dumbbell, name: "Modern Equipment", desc: "Dumbbells, Bench Press, Cables" },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <h4 className="text-accent-green font-bold tracking-widest uppercase text-sm mb-4">Premium Assets</h4>
            <h2 className="text-5xl md:text-7xl font-heading text-white leading-[0.9] mb-6">
              WORLD-CLASS <br/>
              <span className="text-transparent text-gradient">FACILITIES.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We provide the best environment so you can focus 100% on your workout. Clean, safe, and equipped with industry-leading machinery.
            </p>
            
            <div className="space-y-6">
              {facilities.map((fac, i) => {
                const Icon = fac.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center mr-4 shrink-0">
                      <Icon size={20} className="text-accent-green" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold tracking-wide uppercase text-sm">{fac.name}</h4>
                      <p className="text-gray-500 text-sm mt-1">{fac.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
          
          <div className="lg:col-span-7">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" alt="Gym weights" className="w-full h-64 object-cover rounded glass-card p-1" />
                  <img src="https://images.unsplash.com/photo-1623874514711-0f32132d8730?q=80&w=2070&auto=format&fit=crop" alt="Locker room" className="w-full h-80 object-cover rounded glass-card p-1" />
                </div>
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" alt="Gym machines" className="w-full h-80 object-cover rounded glass-card p-1" />
                  <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" alt="Workout area" className="w-full h-64 object-cover rounded glass-card p-1" />
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

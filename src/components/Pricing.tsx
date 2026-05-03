import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "1 Month Plan",
    price: "49",
    features: [
      "Access to all equipment",
      "Free locker use",
      "Air-conditioned environment",
      "Diet consultation (1 session)"
    ]
  },
  {
    name: "3 Months Plan",
    price: "129",
    features: [
      "Access to all equipment",
      "Free locker use",
      "2 Diet consultations",
      "1 PT Assessment session",
      "Save $18"
    ],
    popular: true
  },
  {
    name: "Personal Training",
    price: "199",
    subtitle: "/month",
    features: [
      "Everything in standard plans",
      "1-on-1 dedicated coaching",
      "Customized meal plans",
      "Weekly progress tracking",
      "Priority equipment usage"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent-green font-bold tracking-widest uppercase text-sm mb-4">Membership</h4>
          <h2 className="text-5xl md:text-7xl font-heading text-white">CHOOSE YOUR <span className="text-transparent text-gradient">PLAN</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded glass-card p-8 border-t-4 ${plan.popular ? 'border-t-accent-green' : 'border-t-white/10'} relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-green text-primary-black font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-heading tracking-wide text-white mb-2">{plan.name}</h3>
              <div className="flex items-end mb-8">
                <span className="text-xl text-gray-400 mb-1 mr-1">$</span>
                <span className="text-6xl font-heading text-white leading-none">{plan.price}</span>
                <span className="text-gray-500 font-medium ml-2 mb-1">{plan.subtitle || ""}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check size={18} className="text-accent-green mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className={`block w-full py-4 text-center font-bold uppercase tracking-wider text-sm transition-colors rounded ${plan.popular ? 'bg-accent-green text-primary-black hover:bg-[#00d672]' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

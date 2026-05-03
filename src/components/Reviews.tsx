import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "John D.",
    review: "Best gym in the area, trainers are very supportive. The equipment is top-notch and always available.",
    rating: 5
  },
  {
    name: "Emily R.",
    review: "Clean environment and good equipment. Love the functional training area and the vibe.",
    rating: 5
  },
  {
    name: "Michael T.",
    review: "They helped me lose 15kgs in 4 months. The personalized diet plans actually work.",
    rating: 5
  }
]

export default function Reviews() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-heading font-bold text-white/5 whitespace-nowrap pointer-events-none select-none z-0">
        MEMBERS SAY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 rounded relative border-none border-t border-white/10 bg-white/[0.02]"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              <div className="flex mb-6">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-accent-green fill-accent-green mr-1" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic text-sm leading-relaxed relative z-10">"{rev.review}"</p>
              <div className="border-t border-white/10 pt-4 flex items-center">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-heading text-xl text-white mr-4 shrink-0">
                  {rev.name.charAt(0)}
                </div>
                <h4 className="font-bold tracking-wide uppercase text-sm text-white">{rev.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

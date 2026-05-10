import { motion } from 'motion/react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0F0000] border-t border-accent-red/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h4 className="text-accent-red font-bold tracking-widest uppercase text-sm mb-4">Location & Times</h4>
            <h2 className="text-5xl md:text-7xl font-heading text-white leading-[0.9] mb-10">
              DROP BY AND <br/>
              <span className="text-transparent text-gradient">SAY HELLO.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center mr-6 shrink-0 rounded">
                  <MapPin className="text-accent-red" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">Address</h4>
                  <p className="text-gray-400 text-sm">123 Iron Street, Fitness District<br/>City, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center mr-6 shrink-0 rounded">
                  <Clock className="text-accent-red" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">Opening Hours</h4>
                  <p className="text-gray-400 text-sm">Mon - Sat: 5:30 AM – 11:00 PM<br/>Sun: 7:00 AM - 12:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center mr-6 shrink-0 rounded">
                  <Phone className="text-accent-red" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="flex-1 flex justify-center items-center py-4 bg-[#25D366] text-white font-bold uppercase tracking-wider text-sm rounded hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/20">
                <MessageCircle size={20} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
          
          <div className="h-[500px] rounded overflow-hidden glass-card p-2 relative">
            <div className="absolute inset-2 bg-white/5 rounded flex items-center justify-center z-10 pointer-events-none">
                <span className="bg-primary-black/80 backdrop-blur text-white px-4 py-2 font-heading tracking-widest uppercase border border-white/10 rounded text-sm">Map Integration</span>
            </div>
            {/* Placeholder for map iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113061.27216664972!2d-84.06649667793838!3d39.98295999818815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884051b1de3821f9%3A0x69fb7e8be8c0932!2sSpringfield%2C%20OH%2C%20USA!5e0!3m2!1sen!2suk!4v1714926593539!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{border:0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) contrast(150%)'}} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded object-cover"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}

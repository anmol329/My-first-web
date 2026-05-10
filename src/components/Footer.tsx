export default function Footer() {
  return (
    <footer className="bg-[#0F0000] pt-16 pb-8 border-t border-accent-red/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-heading text-white tracking-wider mb-4">
              IRON<span className="text-accent-red">FORGE</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              We are dedicated to helping you achieve your ultimate fitness goals. State-of-the-art equipment, expert trainers, and a community that pushes you forward.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-wide uppercase text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Facilities', 'Results', 'Pricing'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 text-sm hover:text-accent-red transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-wide uppercase text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} IronForge Gym. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors pointer-events-none">
              <span className="sr-only">Instagram</span>
              IG
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors pointer-events-none">
              <span className="sr-only">Facebook</span>
              FB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">DigiChakra360</h3>
            <p className="text-sm leading-relaxed mb-4">
              Design First. 360 Marketing. Results Focused.
            </p>
            <p className="text-sm text-gray-400 italic">
              Kyuki Aapki Jeet mein, Hamari jeet hain!
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">Digital Marketing Strategy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Ad Campaign Management</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Social Media Management</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Website Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@digichakra360.com" className="hover:text-red-500 transition-colors">
                  info@digichakra360.com
                </a>
              </li>
              <li>
                <a href="tel:+919130445493" className="hover:text-red-500 transition-colors">
                  +91 9130445493
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Trusted Partners</h4>
            <p className="text-sm text-gray-400">
              Meta Business Partners<br />
              Google Premier Partner
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 DigiChakra360. All Rights Reserved. Limited Slots Available!</p>
        </div>
      </div>
    </footer>
  );
}

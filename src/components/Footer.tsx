
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Code className="w-5 h-5 text-blue-400 mr-2" />
            <span className="font-semibold gradient-text">Tamil Amuthu K</span>
          </div>
          
          <p className="text-gray-400 mb-4">
            Full-Stack Developer | Building the future, one line of code at a time
          </p>
          
          <div className="flex items-center justify-center text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>and lots of</span>
            <Code className="w-4 h-4 text-blue-400 ml-1" />
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-gray-500">
              © 2024 Tamil Amuthu K. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

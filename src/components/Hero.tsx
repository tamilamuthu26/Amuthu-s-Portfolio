
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Tamil Amuthu K</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full-Stack Java & Django Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-6">
            React.js | Spring Boot | API Integration
          </p>
          
          <p className="text-gray-300 mb-8 max-w-2xl">
            Building secure, scalable web applications with clean architecture principles.
            Passionate about creating solutions that make a real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
  <a href="#contact">
    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
      <Mail className="w-4 h-4 mr-2" />
      Contact Me
    </Button>
  </a>
  <a href="#projects">
    <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3">
      View Projects
    </Button>
  </a>
</div>


          <div className="flex gap-4 justify-center lg:justify-start">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-scale-in">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <div className="w-72 h-72 rounded-full overflow-hidden">
                  <img
                    src="/profile2.jpg"
                    alt="Tamil Amuthu K"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;

import { ExternalLink, Github, Code, Database, Shield, Globe, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI-based Appointment Booking & Email Management Agent",
      description: "Intelligent AI Agent capable of autonomously handling appointment scheduling, rescheduling, and email communication through natural language prompts. Integrated Google Calendar and Gmail APIs for seamless automation.",
      image: "/ai-agent.png",
      technologies: ["Python", "LangChain", "OpenAI API", "Google Calendar API", "Gmail API", "FastAPI", "MongoDB"],
      features: [
        "Natural language processing for appointment management",
        "Real-time Google Calendar integration",
        "Automated email reading and classification",
        "Multi-step AI reasoning and decision-making",
        "MongoDB session data and agent memory storage"
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI Agent",
      highlight: true
    },
    {
      title: "WE EXPRESS T",
      description: "Custom T-shirt printing platform with modern UI and scalable microservices architecture. Features secure user authentication and payment integration.",
      image: "we-express-t.png",
      technologies: ["React.js", "Spring Boot", "JWT", "Redux", "Spring Security", "Postman"],
      features: [
        "Modern and responsive user interface",
        "Scalable microservices architecture", 
        "Secure JWT authentication",
        "State management with Redux",
        "Comprehensive API testing"
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack"
    },
    {
      title: "HOME CARE",
      description: "Elderly service booking application with responsive design and optimized performance. Includes clear API documentation and database integration.",
      image: "home-care.png", 
      technologies: ["React.js", "Spring Boot", "Neon DB", "Swagger"],
      features: [
        "Responsive UI for all devices",
        "Clear API documentation with Swagger",
        "Optimized database performance",
        "Service booking system",
        "User-friendly interface"
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App"
    }
  ];

  const getIcon = (tech) => {
    if (tech.includes('React')) return <Code className="w-4 h-4" />;
    if (tech.includes('Spring') || tech.includes('JWT')) return <Shield className="w-4 h-4" />;
    if (tech.includes('DB') || tech.includes('Database')) return <Database className="w-4 h-4" />;
    return <Code className="w-4 h-4" />;
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden card-hover animate-fade-in ${
                project.highlight ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
               <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>



              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-portfolio-gray-light border border-blue-600/30 text-blue-300 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1"
                      >
                        {getIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Development <span className="gradient-text">Services</span>
            </h3>
            <p className="text-gray-400">
              Comprehensive web development solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Web Applications",
                description: "Full-stack web applications tailored to your business needs",
                icon: <Code className="w-8 h-8" />
              },
              {
                title: "REST API Development",
                description: "Secure and scalable API development and integration",
                icon: <Database className="w-8 h-8" />
              },
              {
                title: "Secure Backend Systems",
                description: "Spring Security & JWT implementation for robust authentication",
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: "Responsive Frontend",
                description: "Modern, responsive UI/UX design with React.js",
                icon: <Globe className="w-8 h-8" />
              },
              {
                title: "Cloud Database Setup",
                description: "Database design and cloud integration with Neon/MySQL",
                icon: <Database className="w-8 h-8" />
              },
              {
                title: "Performance Optimization",
                description: "Application optimization for speed and scalability",
                icon: <Wrench className="w-8 h-8" />
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 card-hover text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-blue-600/20 rounded-lg p-4 w-fit mx-auto mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3 text-blue-300">
                  {service.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

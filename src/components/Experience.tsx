
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SDE Intern",
      company: "EPAM Systems",
      period: "Ongoing",
      location: "Remote",
      type: "Internship",
      technologies: ["Core Java", "Spring Boot", "Microservices", "Spring Security"],
      description: "Working on enterprise-level applications with focus on microservices architecture and security implementation. Gaining experience in building scalable backend systems.",
      achievements: [
        "Developed microservices using Spring Boot framework",
        "Implemented security features with Spring Security",
        "Collaborated on enterprise-level Java applications"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Nobel Software",
      period: "Dec 2023 – Jan 2024",
      location: "Remote",
      type: "Internship",
      technologies: ["Django", "MySQL", "Python"],
      description: "Developed web applications using Django framework with MySQL database integration. Focused on backend development and database management.",
      achievements: [
        "Built full-stack web applications using Django",
        "Designed and implemented MySQL database schemas",
        "Delivered projects within tight deadlines"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building expertise through hands-on experience at leading technology companies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-white/10 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600/20 rounded-lg p-3 mr-4">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-300">{exp.title}</h3>
                      <p className="text-lg font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="lg:col-span-2">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-portfolio-gray-light border border-blue-600/30 text-blue-300 px-3 py-1 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

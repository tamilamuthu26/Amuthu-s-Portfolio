
import { Code, Database, Server, Globe, Wrench, Shield, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["LangChain", "OpenAI API", "AI Agents", "Natural Language Processing", "Prompt Engineering"],
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Frameworks",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "Django", "Spring Boot", "FastAPI", "Tailwind CSS"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "APIs & Integration",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Google Calendar API", "Gmail API", "REST APIs", "Postman", "Swagger", "JWT"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL", "Neon DB"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Backend & Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Spring Security", "Microservices", "API Security"],
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-portfolio-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} rounded-lg p-3 mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 font-medium">{skill}</span>
                    </div>
                    <div className="w-full bg-portfolio-gray-light rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${85 + Math.random() * 15}%`,
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-white/10 inline-block">
            <h3 className="text-2xl font-semibold mb-4">Specializations</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "AI Agent Development",
                "Full-Stack Development",
                "API Integration & Orchestration", 
                "Enterprise Security",
                "Microservices Architecture",
                "Intelligent Automation"
              ].map((spec, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

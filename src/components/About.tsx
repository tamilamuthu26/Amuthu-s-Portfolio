
import { GraduationCap, User, Target } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.E Computer Science",
      institution: "Sri Krishna College of Technology",
      year: "2021–2025",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "HSE",
      institution: "Achyuta CBSE Academy",
      year: "2020–2021",
      score: "93.6%",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "SSLC",
      institution: "SSM CBSE Academy",
      year: "2018–2019",
      score: "93%",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Time Management", 
    "Leadership",
    "Communication"
  ];

  return (
    <section id="about" className="section-padding bg-portfolio-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a strong foundation in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="animate-slide-in-left">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-white/10 card-hover">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold">Who I Am</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a dedicated Full-Stack Developer currently pursuing B.E Computer Science 
                at Sri Krishna College of Technology. With hands-on experience in Java, Python, 
                and modern web technologies, I specialize in building secure, scalable applications 
                that solve real-world problems.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                My journey includes internships at EPAM Systems and Nobel Software, where I've 
                worked on enterprise-level applications using Spring Boot, Django, and React.js. 
                I'm passionate about clean code, security best practices, and creating user-centric solutions.
              </p>

              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-blue-400 mr-3" />
                <h4 className="text-xl font-semibold">Soft Skills</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-blue-600/20 rounded-lg px-4 py-2 text-center">
                    <span className="text-blue-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-fade-in">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-white/10 card-hover">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-600 pl-6 relative">
                    <div className="absolute -left-3 top-0 bg-blue-600 rounded-full p-1">
                      {edu.icon}
                    </div>
                    
                    <div className="bg-portfolio-gray-light rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-blue-300 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-300 mb-1">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">{edu.year}</span>
                        {edu.score && (
                          <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                            {edu.score}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

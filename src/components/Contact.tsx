
import { useState } from 'react';
import { Mail, Phone, Send, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "9361093790",
      href: "tel:9361093790"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email", 
      value: "cseskct241tamilamuthu.k@gmail.com",
      href: "mailto:cseskct241tamilamuthu.k@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "#"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn", 
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-portfolio-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 bg-portfolio-gray-light rounded-lg hover:bg-blue-600/20 transition-colors duration-200 group"
                  >
                    <div className="bg-blue-600/20 rounded-lg p-3 mr-4 group-hover:bg-blue-600 transition-colors duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium break-all text-sm sm:text-base">
                        {info.value}
                      </p>

                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-portfolio-gray-light rounded-lg p-3 hover:bg-blue-600 transition-colors duration-200 group"
                      aria-label={social.label}
                    >
                      <div className="text-gray-400 group-hover:text-white transition-colors duration-200">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-600/30">
                <h4 className="text-lg font-semibold mb-2">Available for Work</h4>
                <p className="text-gray-300 text-sm">
                  I'm currently open to new opportunities and exciting projects. 
                  Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-8">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-portfolio-gray-light border-gray-600 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-portfolio-gray-light border-gray-600 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-portfolio-gray-light border-gray-600 focus:border-blue-500 text-white placeholder-gray-400 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

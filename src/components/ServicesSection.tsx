import { Package, Globe, Sparkles, Share2, MonitorSmartphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: 'Product Ownership',
      subtitle: 'SaaS Solutions',
      description: 'Strategic product development and agile execution.',
      color: 'hsl(190, 90%, 50%)',
      colorEnd: 'hsl(185, 90%, 60%)',
    },
    {
      icon: Globe,
      title: 'Web Development',
      subtitle: 'Design & Code',
      description: 'Modern websites optimized for performance.',
      color: 'hsl(270, 80%, 60%)',
      colorEnd: 'hsl(280, 70%, 65%)',
    },
    {
      icon: Sparkles,
      title: 'Brand Identity',
      subtitle: 'Logo Design',
      description: 'Memorable brands that resonate.',
      color: 'hsl(25, 90%, 55%)',
      colorEnd: 'hsl(30, 90%, 60%)',
    },
    {
      icon: Share2,
      title: 'Digital Marketing',
      subtitle: 'Social Media',
      description: 'Content that amplifies your presence.',
      color: 'hsl(190, 90%, 50%)',
      colorEnd: 'hsl(270, 80%, 60%)',
    },
    {
      icon: MonitorSmartphone,
      title: 'Enterprise POS',
      subtitle: 'Product Experience',
      description: 'Intuitive systems for efficiency.',
      color: 'hsl(270, 80%, 60%)',
      colorEnd: 'hsl(25, 90%, 55%)',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions spanning product development, design, and digital marketing.
          </p>
        </div>

        {/* Auto-scrolling marquee on mobile, grid on desktop */}
        <div className="overflow-hidden lg:overflow-visible">
          <div className="flex gap-4 animate-[marquee-scroll_20s_linear_infinite] lg:animate-none lg:grid lg:grid-cols-5 w-max lg:w-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-[260px] lg:w-auto glass rounded-2xl p-5 cursor-default relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom right, ${service.color}, ${service.colorEnd})`, padding: '1px' }}>
                  <div className="absolute inset-[1px] bg-card rounded-2xl" />
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" style={{ background: `linear-gradient(to bottom right, ${service.color}, ${service.colorEnd})` }} />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl p-[1px] mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{ background: `linear-gradient(to bottom right, ${service.color}, ${service.colorEnd})` }}>
                    <div className="w-full h-full rounded-xl bg-card/90 flex items-center justify-center backdrop-blur-sm">
                      <service.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-foreground mb-0.5 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-primary/70 font-medium mb-2">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity rounded-tl-3xl" style={{ background: `linear-gradient(to top left, ${service.color}, ${service.colorEnd})` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

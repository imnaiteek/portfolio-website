import { Building2, Home, Church, Music, UtensilsCrossed } from 'lucide-react';

const ExperienceSection = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Xellar Labs',
      subtitle: 'Carbon POS',
      description: 'Led product development for innovative POS systems.',
      color: 'hsl(190, 90%, 50%)',
      colorEnd: 'hsl(210, 90%, 55%)',
    },
    {
      icon: Home,
      title: 'Real Estate',
      subtitle: 'Property Tech',
      description: 'Digital solutions for property management.',
      color: 'hsl(270, 80%, 60%)',
      colorEnd: 'hsl(330, 80%, 60%)',
    },
    {
      icon: Church,
      title: 'Churches',
      subtitle: 'Community',
      description: 'Engaging digital experiences for communities.',
      color: 'hsl(40, 90%, 55%)',
      colorEnd: 'hsl(25, 90%, 55%)',
    },
    {
      icon: Music,
      title: 'Creators',
      subtitle: 'Artists',
      description: 'Portfolios and brands for creatives.',
      color: 'hsl(350, 80%, 60%)',
      colorEnd: 'hsl(0, 80%, 55%)',
    },
    {
      icon: UtensilsCrossed,
      title: 'Hospitality',
      subtitle: 'F&B Industry',
      description: 'Digital menus and booking systems.',
      color: 'hsl(160, 80%, 45%)',
      colorEnd: 'hsl(175, 80%, 45%)',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary rounded-full border border-secondary/20">
            Experience
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Industry <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering impactful solutions across diverse sectors.
          </p>
        </div>

        {/* Auto-scrolling marquee on mobile, grid on desktop */}
        <div className="overflow-hidden lg:overflow-visible">
          <div className="flex gap-4 animate-[marquee-scroll_20s_linear_infinite] lg:animate-none lg:grid lg:grid-cols-5 w-max lg:w-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-[220px] lg:w-auto relative cursor-default"
              >
                {/* Card */}
                <div className="glass rounded-2xl p-5 h-full transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 relative overflow-hidden">
                  {/* Gradient line on top */}
                  <div className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to right, ${industry.color}, ${industry.colorEnd})` }} />
                  
                  {/* Glow effect */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-20 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" style={{ background: `linear-gradient(to bottom, ${industry.color}, ${industry.colorEnd})` }} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl p-[1px] mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300" style={{ background: `linear-gradient(to bottom right, ${industry.color}, ${industry.colorEnd})` }}>
                      <div className="w-full h-full rounded-xl bg-card/90 flex items-center justify-center">
                        <industry.icon className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                    
                    <h3 className="font-display text-lg font-semibold text-foreground mb-0.5">
                      {industry.title}
                    </h3>
                    <p className="text-xs font-medium mb-2 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${industry.color}, ${industry.colorEnd})` }}>
                      {industry.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 opacity-5 group-hover:opacity-10 rounded-full transition-opacity" style={{ background: `linear-gradient(to top left, ${industry.color}, ${industry.colorEnd})` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

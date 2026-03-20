import { Briefcase, Code, Palette } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: 'Product Ownership',
      description: 'Leading product development with strategic vision and agile methodologies.',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern technologies.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting intuitive interfaces and memorable brand experiences.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Hi, I'm <span className="text-foreground font-semibold">Naiteek Sahare</span> — a passionate creator at the intersection of technology and design. With expertise spanning product ownership, full-stack development, and digital design, I bring a unique perspective to every project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I thrive on turning complex challenges into elegant solutions, whether it's architecting a SaaS platform, designing a brand identity, or crafting user experiences that delight and engage.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass rounded-lg p-4 flex items-center gap-4 hover-lift cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

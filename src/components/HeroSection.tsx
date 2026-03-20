import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const roles = [
    'Jr. Product Owner',
    'Full-Stack Developer',
    'Digital Designer',
    'Creative Thinker'
  ];

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Animated gradient orbs with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(var(--secondary) / 0.4) 0%, transparent 70%)',
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)',
            transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px))`,
            transition: 'transform 0.4s ease-out'
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rotating ring */}
        <div 
          className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/30 rounded-full"
          style={{
            animation: 'spin 20s linear infinite',
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full" />
        </div>

        {/* Floating diamonds */}
        <div 
          className="absolute top-40 left-20 w-8 h-8 bg-gradient-to-br from-primary to-secondary rotate-45 floating opacity-60"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-40 right-32 w-6 h-6 bg-gradient-to-br from-secondary to-accent rotate-45 floating opacity-60"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-gradient-to-br from-accent to-primary rotate-45 floating opacity-60"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability tag */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass rounded-full animate-fade-in-up group cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/70 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Available for opportunities
              </span>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </div>

            {/* Main heading with typing effect */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                I'm a
              </span>
              <span 
                className="block h-[1.2em] gradient-text animate-gradient bg-gradient-to-r from-primary via-secondary to-accent animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                {typedText}
                <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse" />
              </span>
              <span 
                className="block text-foreground animate-fade-in-up text-3xl md:text-4xl lg:text-5xl mt-2 opacity-80"
                style={{ animationDelay: '0.3s' }}
              >
                & Digital Creator
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up leading-relaxed"
              style={{ animationDelay: '0.4s' }}
            >
              Crafting <span className="text-primary font-medium">digital experiences</span> that blend 
              innovation with aesthetics. Transforming ideas into 
              <span className="text-secondary font-medium"> impactful products</span>.
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#work')} 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('#contact')} 
                className="group border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 rounded-xl transition-all hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Let's Connect
                  <span className="text-primary group-hover:rotate-45 transition-transform">✦</span>
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div 
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left group cursor-default">
                  <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform inline-block">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image with effects */}
          <div 
            className="relative animate-fade-in-up"
            style={{ 
              animationDelay: '0.3s',
              transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {/* Rotating border ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute -inset-8 rounded-full border border-secondary/20 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            
            {/* Glowing background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl animate-pulse" />
            
            {/* Profile container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
              <img 
                src={profileImage} 
                alt="Naiteek Sahare" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -right-4 top-10 glass px-3 py-2 rounded-lg text-sm font-medium animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="gradient-text">✨ Creative</span>
            </div>
            <div className="absolute -left-8 bottom-20 glass px-3 py-2 rounded-lg text-sm font-medium animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
              <span className="text-secondary">⚡ Innovative</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;

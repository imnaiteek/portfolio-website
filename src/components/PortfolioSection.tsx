import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      category: 'Product Development',
      title: 'Carbon POS',
      problem: 'Restaurants needed an intuitive, modern POS system that could handle complex operations.',
      solution: 'Led the development of a comprehensive point-of-sale platform with table management, inventory tracking, and analytics.',
      outcome: 'Successfully deployed across multiple restaurant chains, improving operational efficiency by 40%.',
      gradient: 'from-primary to-secondary',
    },
    {
      category: 'Web Development',
      title: 'Multi-Industry Websites',
      problem: 'Various businesses lacked professional online presence and lead generation capabilities.',
      solution: 'Designed and developed custom websites with SEO optimization, lead capture forms, and responsive layouts.',
      outcome: 'Increased online visibility and conversion rates for clients across real estate, hospitality, and creative industries.',
      gradient: 'from-secondary to-accent',
    },
    {
      category: 'Design & Branding',
      title: 'Brand Identity Projects',
      problem: 'Startups and established businesses needed cohesive brand identities that stood out.',
      solution: 'Created comprehensive brand guidelines including logos, color palettes, typography, and marketing materials.',
      outcome: 'Delivered memorable brand identities that helped clients establish strong market positioning.',
      gradient: 'from-accent to-primary',
    },
  ];

  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Case studies showcasing problem-solving through design and development.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover-lift cursor-default group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Project info */}
                <div className="lg:w-1/3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-primary-foreground mb-4`}>
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                </div>

                {/* Case study */}
                <div className="lg:w-2/3 grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Problem
                    </h4>
                    <p className="text-muted-foreground text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-secondary font-semibold mb-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Solution
                    </h4>
                    <p className="text-muted-foreground text-sm">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-accent font-semibold mb-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Outcome
                    </h4>
                    <p className="text-muted-foreground text-sm">{project.outcome}</p>
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

export default PortfolioSection;

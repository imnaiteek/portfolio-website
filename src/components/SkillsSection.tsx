const SkillsSection = () => {
  const skills = [
    { name: 'Product Ownership', color: 'from-primary to-cyan' },
    { name: 'UI/UX Design', color: 'from-secondary to-purple' },
    { name: 'HTML & CSS', color: 'from-accent to-orange' },
    { name: 'JavaScript', color: 'from-primary to-secondary' },
    { name: 'React', color: 'from-secondary to-accent' },
    { name: 'Python', color: 'from-accent to-primary' },
    { name: 'Branding & Logos', color: 'from-primary to-cyan' },
    { name: 'Social Media Design', color: 'from-secondary to-purple' },
    { name: 'SaaS Platforms', color: 'from-accent to-orange' },
    { name: 'Agile Methodologies', color: 'from-primary to-secondary' },
    { name: 'Figma', color: 'from-secondary to-accent' },
    { name: 'Database Design', color: 'from-accent to-primary' },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse toolkit for building exceptional digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Gradient border */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
              
              <div className="relative glass px-6 py-3 rounded-lg hover:scale-105 transition-transform cursor-default">
                <span className="font-medium text-foreground">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

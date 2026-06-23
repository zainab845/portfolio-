const skills = [
  { 
    category: 'Languages', 
    items: ['C++', 'C', 'Python', 'SQL', 'x86 Assembly', 'JavaScript'] 
  },
  { 
    category: 'Frameworks & Libraries', 
    items: ['React', 'Pandas', 'Matplotlib', 'scikit-learn', 'SFML'] 
  },
  { 
    category: 'Tools & Platform', 
    items: ['Git', 'GitHub', 'Vercel', 'VS Code'] 
  },
  { 
    category: 'Design & Core CS', 
    items: ['OOP', 'Data Structures', 'Adobe Illustrator', 'Lightroom'] 
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and concepts I work with</p>
        
        <div className="skills-grid">
          {skills.map(group => (
            <div className="skills-card" key={group.category}>
              <h3 className="skills-category">{group.category}</h3>
              <div className="skills-list">
                {group.items.map(skill => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
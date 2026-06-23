const projects = [
  {
    title: 'StudyZen - AI Study Planner',
    description: 'Engineered an intelligent web application that dynamically generates personalized academic study schedules tailored to real-time mental health indicators and stress levels.',
    tech: ['React', 'Python', 'AI/ML APIs'],
    github: 'https://github.com/zainab845/StudyZen',
    live: '#',
  },
  {
    title: 'OnePager React Clone',
    description: 'Recreated a complex HTML template as a fully responsive React application, deployed on Vercel with a clean, component-based architecture.',
    tech: ['React', 'CSS', 'Vercel'],
    github: 'https://github.com/zainab845/onepager-clone',
    live: '#',
  },
  {
    title: 'InvestConnect',
    description: 'Developed a robust relational SQL-based platform tailored for tracking, simulating, and managing virtual financial investments and portfolio allocations.',
    tech: ['SQL', 'Database Design'],
    github: 'https://github.com/zainab845/InvestConnect',
    live: '#',
  },
  {
    title: 'Candy Crush Clone',
    description: 'Logic-based grid puzzle game utilizing the SFML graphics framework for robust rendering, interactive event handling, and optimized state updates.',
    tech: ['C++', 'SFML'],
    github: 'https://github.com/zainab845/CandyCrush-CPP',
    live: '#',
  },
  {
    title: 'Personal Portfolio',
    description: 'This responsive portfolio website built with React and React Router, featuring clean UI/UX and upcoming API integration for Login/Signup.',
    tech: ['React', 'Vite', 'Node.js'],
    github: 'https://github.com/zainab845/portfolio-',
    live: '#',
  },
  {
    title: 'Dodging Cars Arcade',
    description: 'Implemented a real-time, lightweight arcade game leveraging direct low-level memory management and keyboard hardware interrupts.',
    tech: ['x86 Assembly'],
    github: 'https://github.com/zainab845/coal-project-dodging-cars',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Things I've built so far</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.title}>
              
              <div className="project-card-top">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
              
              <div className="project-card-bottom">
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">GitHub →</a>
                  {/* Only show the 'Live' link if it's not a placeholder '#' */}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link">Live →</a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import profileImg from '../assets/profile.jpg.png' 

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        
        {/* Profile Image */}
        <div className="about-image-wrapper">
          <div className="about-image-placeholder" style={{ padding: 0, overflow: 'hidden', border: 'none', background: 'transparent' }}>
            <img 
              src={profileImg} 
              alt="Zainab Bilal" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} 
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          
          <p className="about-para">
            Hi, I'm Zainab Bilal, a dedicated Computer Science student at FAST NUCES in Lahore. I have a strong foundation in software development and a deep passion for turning complex technical concepts into practical, real-world projects.
          </p>
          
          <p className="about-para">
            I specialize in C++, Python, and React. Whether I'm building AI-integrated study planners, virtual investment platforms, or competing in LUMS Women in Computing CTF hackathons, I love being a proactive problem-solver. When I'm not coding, you can find me reading a book, exploring new technologies, or enjoying a good cup of coffee.
          </p>
          
        
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Core Languages</span>
            </div>
            <div className="stat">
              <span className="stat-number">ITU</span>
              <span className="stat-label">Python AI/ML Cert</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
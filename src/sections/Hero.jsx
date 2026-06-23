export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Zainab.</h1>
        <h2 className="hero-role">Frontend Developer & CS Student</h2>
        <p className="hero-desc">
          I build clean, responsive web experiences. Currently exploring
          full-stack development and turning ideas into real products.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
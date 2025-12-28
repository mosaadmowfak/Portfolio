import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img src="/me.jpg" alt="me" />

      <h2 className="hero-name">Mosaad Mowfak</h2>
      <h3 className="hero-title">Backend .NET Developer</h3>

      <p>
        Building scalable, high-performance RESTful APIs using ASP.NET Core
        and Clean Architecture.
      </p>

      <div className="buttons">
        <a href="#projects" className="btn primary">View Projects</a>
        <a href="/cv.pdf" className="btn" download>Download CV</a>
      </div>

      <div className="hero-icons">
        <a href="https://github.com/mosaadmowfak" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mosaad-mowfak-563a19256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:mosaadmowfak03@email.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

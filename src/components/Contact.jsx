import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <h3>Get In Touch</h3>

      <div className="card contact-card">
        <a href="mailto:mosaadmowfak03@gmail.com" className="contact-item">
          <FaEnvelope /> mosaadmowfak03@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/mosaad-mowfak-563a19256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
          href="https://github.com/mosaadmowfak"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaGithub /> GitHub
        </a>

        <a href="/cv.pdf" download className="btn primary">
          Download CV
        </a>
      </div>
    </section>
  );
}

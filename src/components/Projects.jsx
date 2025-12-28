import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects">
      <h3>Projects</h3>

      <div className="grid">

        {/* BACKEND PROJECT */}
        <div className="card">
          <h4>E-Learning Management System – Backend</h4>

          <p>
            A complete backend system for an e-learning platform including
            authentication, authorization, payments, and admin management.
          </p>

          <ul className="project-features">
            <li>JWT Authentication & Role-based Authorization</li>
            <li>Admin Panel & User Dashboard APIs</li>
            <li>Online Payments Integration (Paymob)</li>
            <li>Courses, Sessions & Enrollments Management</li>
            <li>RESTful APIs with ASP.NET Core</li>
            <li>SQL Server & Entity Framework Core</li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/mosaadmowfak/E-Learning-Back.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://talented-academy.space/swagger/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt /> Swagger API
            </a>
          </div>
        </div>

        {/* FRONTEND PROJECT */}
        <div className="card">
          <h4>E-Learning Management System – Frontend</h4>

          <p>
            A modern frontend application for students and admins to manage
            courses, sessions, enrollments, and payments.
          </p>

          <ul className="project-features">
            <li>User Authentication & Authorization</li>
            <li>Admin Dashboard for Courses & Sessions</li>
            <li>User Dashboard & Enrollment Flow</li>
            <li>Online Payments Integration</li>
            <li>Responsive UI with React</li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/mosaadmowfak/E-Learning-Frontend-Talented.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.talented-academy.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

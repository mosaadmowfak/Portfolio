import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills">
      <h3>Technical Skills</h3>

      <div className="grid">

        {/* BACKEND */}
        <div className="card">
          <FaServer />
          <h4>Backend Development</h4>
          <p>
            C#, ASP.NET Core, Web API, LINQ, Entity Framework Core
          </p>
        </div>

        {/* FRONTEND */}
        <div className="card">
          <FaCode />
          <h4>Frontend Development</h4>
          <p>
            HTML5, CSS3, JavaScript, React.js, Bootstrap
          </p>
        </div>

        {/* DATABASES */}
        <div className="card">
          <FaDatabase />
          <h4>Databases</h4>
          <p>
            SQL Server, Redis
          </p>
        </div>

        {/* TOOLS */}
        <div className="card">
          <FaTools />
          <h4>Tools & Concepts</h4>
          <p>
            JWT Authentication, Swagger, Git, Clean Architecture
          </p>
        </div>

      </div>
    </section>
  );
}

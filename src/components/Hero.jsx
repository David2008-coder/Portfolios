import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { profile, stats } from "../data";
import photo from "../assets/david.jpg";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="status reveal">
            <span className="dot" /> Available for remote work
          </p>

          <h1 className="hero-title reveal">
            Full-stack web apps,
            <br />
            built <em>end to end.</em>
          </h1>

          <p className="hero-sub reveal">
            I'm David, a developer in Lagos. React on the front, Django and PostgreSQL behind it:
            auth, bookings, dashboards and deployments that real businesses use.
          </p>

          <div className="hero-actions reveal">
            <a href="#projects" className="btn btn-volt">
              See my work <FiArrowDownRight />
            </a>
            <a href={profile.cv} className="btn btn-ghost" download>
              <FiDownload /> Download CV
            </a>
          </div>
        </div>

        <aside className="id-card reveal" aria-label="Profile card">
          <div className="badge">
            <svg className="badge-ring" viewBox="0 0 240 240" aria-hidden="true">
              <defs>
                <path id="ringPath" d="M120,120 m-98,0 a98,98 0 1,1 196,0 a98,98 0 1,1 -196,0" />
              </defs>
              <text>
                <textPath href="#ringPath" startOffset="0" textLength="608" lengthAdjust="spacing">
                  FULL-STACK DEVELOPER • REACT • DJANGO • POSTGRESQL •
                </textPath>
              </text>
            </svg>
            <img src={photo} alt="Portrait of David Obasuke" className="badge-photo" width="150" height="150" />
          </div>

          <div className="id-meta">
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>
            <ul>
              <li><span>Based in</span>{profile.location}</li>
              <li><span>Stack</span>React · Django · PostgreSQL</li>
              <li><span>Now learning</span>AI automation</li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="wrap stats">
        {stats.map((s) => (
          <div className="stat reveal" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

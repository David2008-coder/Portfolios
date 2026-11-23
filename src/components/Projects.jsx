import { FiArrowUpRight, FiImage } from "react-icons/fi";
import { projects } from "../data";

// Any image dropped into src/assets/screenshots/ is picked up automatically.
// Name it after the project slug: restaurant.jpg, shopit.png, carepulse.webp ...
const shots = import.meta.glob("../assets/screenshots/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

function findShot(slug) {
  const key = Object.keys(shots).find((k) => {
    const file = k.split("/").pop().toLowerCase();
    return file.startsWith(slug + ".");
  });
  return key ? shots[key] : null;
}

function BrowserFrame({ project }) {
  const shot = findShot(project.slug);
  return (
    <div className="frame">
      <div className="frame-bar">
        <span /><span /><span />
        <div className="frame-url">{project.host}</div>
      </div>
      <div className="frame-body">
        {shot ? (
          <img src={shot} alt={`${project.title} homepage screenshot`} loading="lazy" />
        ) : (
          <div className="shot-empty">
            <FiImage size={30} />
            <strong>Homepage screenshot goes here</strong>
            <code>src/assets/screenshots/{project.slug}.png</code>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="reveal">
          <p className="eyebrow">02 / Selected work</p>
          <h2 className="h2">Three projects, live and deployed.</h2>
        </div>

        <div className="project-list">
          {projects.map((p, i) => (
            <article className={`project reveal ${i % 2 ? "flip" : ""}`} key={p.slug}>
              <a className="project-media" href={p.live} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                <BrowserFrame project={p} />
              </a>

              <div className="project-info">
                <span className="project-index">{p.index}</span>
                <p className="project-kind">{p.kind}</p>
                <h3>{p.title}</h3>
                <p className="project-blurb">{p.blurb}</p>
                <ul className="project-points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="chips">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <a className="btn btn-volt" href={p.live} target="_blank" rel="noreferrer">
                  Open live site <FiArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

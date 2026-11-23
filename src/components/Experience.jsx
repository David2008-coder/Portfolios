import { experience } from "../data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="reveal">
          <p className="eyebrow">04 / Experience</p>
          <h2 className="h2">Where I've been building.</h2>
        </div>

        <ol className="timeline">
          {experience.map((e) => (
            <li className="tl-item reveal" key={e.title}>
              <div className="tl-when">{e.when}</div>
              <div className="tl-body">
                <h3>{e.title}</h3>
                <p className="tl-org">{e.org}</p>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

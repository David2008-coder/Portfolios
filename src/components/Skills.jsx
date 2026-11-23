import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section className="section alt" id="skills">
      <div className="wrap">
        <div className="reveal">
          <p className="eyebrow">03 / Skills</p>
          <h2 className="h2">What I work with.</h2>
        </div>

        <div className="skill-grid">
          {skillGroups.map((g) => (
            <div className="skill-card reveal" key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

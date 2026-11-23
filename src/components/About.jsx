export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="reveal">
          <p className="eyebrow">01 / About</p>
          <h2 className="h2">I like building the whole thing, not just one layer.</h2>
        </div>
        <div className="about-copy reveal">
          <p>
            I'm a full-stack developer building responsive web applications with React and JavaScript on the
            frontend, and Python, Django and Django REST Framework on the backend, with PostgreSQL holding the data.
          </p>
          <p>
            My work covers user-facing interfaces, REST API integrations, database-backed workflows and admin
            dashboards for e-commerce, healthcare, restaurant and booking products. I deploy frontends on Vercel
            and backends on Render, and manage media with Cloudinary.
          </p>
          <p>
            Right now I'm doubling down on full-stack development and starting to explore AI automation, so the
            apps I build can take repetitive work off people's plates.
          </p>
        </div>
      </div>
    </section>
  );
}

import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono">Built with React · Deployed on Vercel</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

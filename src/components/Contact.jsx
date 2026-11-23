import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaWhatsapp, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { profile } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // No backend needed: this opens the visitor's email app with the message pre-filled.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <p className="eyebrow">06 / Contact</p>
          <h2 className="h2">Let's build something together.</h2>
          <p className="learn-text">
            I'm open to remote full-time, contract and freelance work. Send a message and I'll get back to you.
          </p>

          <ul className="contact-list">
            <li><FiMail /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><FiPhone /><a href={profile.whatsapp} target="_blank" rel="noreferrer">{profile.phone}</a></li>
            <li><FiMapPin /><span>{profile.location}</span></li>
          </ul>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a>
            <a href={profile.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>

        <form className="form reveal" onSubmit={submit}>
          <label>
            Your name
            <input required value={form.name} onChange={set("name")} placeholder="Jane Doe" />
          </label>
          <label>
            Your email
            <input required type="email" value={form.email} onChange={set("email")} placeholder="jane@company.com" />
          </label>
          <label>
            Message
            <textarea required rows={5} value={form.message} onChange={set("message")} placeholder="Tell me about the role or project..." />
          </label>
          <button className="btn btn-volt" type="submit">
            Send message <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
}

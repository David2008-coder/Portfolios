import { useEffect, useState } from "react";
import { FiCpu, FiZap, FiX, FiMaximize2 } from "react-icons/fi";
import cert from "../assets/ai-certificate.jpg";

export default function Learning() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="section alt" id="learning">
      <div className="wrap learn-grid">
        <div className="reveal">
          <p className="eyebrow">05 / Currently learning</p>
          <h2 className="h2">Adding AI automation to my full-stack toolkit.</h2>
          <p className="learn-text">
            My main focus is full-stack development. Alongside it, I'm learning how to connect AI to everyday
            business workflows, so the apps I build can automate repetitive tasks instead of just storing data.
          </p>

          <div className="learn-cards">
            <div className="learn-card">
              <FiZap />
              <div>
                <strong>AI automation</strong>
                <span>Learning to wire AI into real workflows. In progress.</span>
              </div>
            </div>
            <div className="learn-card">
              <FiCpu />
              <div>
                <strong>AI &amp; Machine Learning foundations</strong>
                <span>Completed a fundamentals program. Going deeper over time.</span>
              </div>
            </div>
          </div>
        </div>

        <button className="cert reveal" onClick={() => setOpen(true)} aria-label="View certificate larger">
          <img src={cert} alt="Regonet Global certificate of completion in Artificial Intelligence and Machine Learning" />
          <span className="cert-cap">
            <span>Regonet Global · AI &amp; ML Fundamentals · July 2025</span>
            <FiMaximize2 />
          </span>
        </button>
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <button className="lightbox-close" aria-label="Close"><FiX size={24} /></button>
          <img src={cert} alt="AI and Machine Learning certificate" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

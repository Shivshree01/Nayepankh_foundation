import React, { useEffect, useRef } from "react";
import "./Services.css";

const services = [
  {
    id: "01",
    description: "Helping underprivileged children stay in school with books, fees & mentorship",
    title: "Education for all",
  },
  {
    id: "02",
    description: "Free check-up camps, nutrition support & medicine drives for slum communities",
    title: "Healthcare outreach",
  },
  {
    id: "03",
    description: "Blankets, food, and emergency relief during disasters and harsh winters",
    title: "Disaster & relief aid",
    hasCollage: true,
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("services__row--visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="programs" ref={sectionRef}>
      {/* Decorative saffron curved line */}
      <div className="services__red-curve" aria-hidden="true">
        <svg
          viewBox="0 0 864 654"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727"
            stroke="#FF6B35"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="services__container">
        {/* ── Header ── */}
        <div className="services__header">
          <span className="services__eyebrow">Our Programs</span>
          <h2 className="services__heading">
            <span className="services__heading-line">
              What we{" "}
              <span className="services__pill">can</span>
            </span>
            <span className="services__heading-line">
              <span className="services__underline-wrap">
                offer you!
                <svg
                  className="services__underline-svg"
                  viewBox="0 0 372 33"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5"
                    stroke="#FFC250"
                    strokeWidth="5"
                    fill="none"
                  />
                </svg>
              </span>
            </span>
          </h2>
        </div>

        {/* ── Programs list ── */}
        <div className="services__list">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className="services__row"
              ref={(el) => (rowsRef.current[i] = el)}
              style={{ "--delay": `${i * 0.12}s` }}
            >
              {/* Left: description */}
              <div className="services__row-left">
                <p className="services__row-desc">{svc.description}</p>
              </div>

              {/* Center: title */}
              <div className="services__row-right">
                <h3 className="services__row-title">
                  {svc.title}
                  {svc.hasCollage && (
                    <span className="services__collage" aria-hidden="true">
                      <span className="services__collage-inner">
                        <span className="services__collage-seg seg--yellow" />
                        <span className="services__collage-seg seg--orange" />
                        <span className="services__collage-seg seg--green" />
                        <span className="services__collage-seg seg--pink" />
                      </span>
                    </span>
                  )}
                </h3>
                <span className="services__row-arrow" aria-hidden="true">——→</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div className="services__cta">
          <p className="services__cta-text">
            Want to volunteer your time or skill instead?
          </p>
          <a
            href="https://nayepankh.com/donate"
            className="services__cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our team
          </a>
        </div>
      </div>
    </section>
  );
}
import React, { useState, useEffect, useRef } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    text: "NayePankh didn't just give my daughter books — they gave her a reason to keep going to school. The volunteers visit every month and actually remember her name.",
    name: "Sunita Devi",
    role: "Parent, Kanpur education program",
    avatar: "https://images.unsplash.com/photo-1664150547861-768d4894ebc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwd29tYW4lMjBmYWNlJTIwcnVyYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    text: "I started volunteering for a few weekends and ended up coordinating an entire relief drive. The team trusts you with real responsibility from day one.",
    name: "Aman Verma",
    role: "Volunteer, 2 years with NayePankh",
    avatar: "https://plus.unsplash.com/premium_photo-1682092618317-9b50d60e6e0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const floatingAvatars = [
  {
    id: "tl",
    src: "https://images.unsplash.com/photo-1682786307938-d11a335dd3cc?q=80&w=897&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "testimonials__avatar testimonials__avatar--tl",
    parallaxFactor: 0.018,
    floatDuration: 6.4,
    floatDelay: 0,
    opinion: "Watching kids learn to read is the best part of my week.",
  },
  {
    id: "ml",
    src: "https://images.unsplash.com/photo-1746942935076-ea12a22b4fa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMG5nbyUyMGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    className: "testimonials__avatar testimonials__avatar--ml",
    parallaxFactor: 0.009,
    floatDuration: 7.8,
    floatDelay: 1.2,
    opinion: "Best team I've ever volunteered with.",
  },
  {
    id: "bl",
    src: "https://images.unsplash.com/flagged/photo-1577604981316-298e453a19dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMG5nbyUyMGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    className: "testimonials__avatar testimonials__avatar--bl",
    parallaxFactor: 0.024,
    floatDuration: 8.2,
    floatDelay: 0.5,
    opinion: "We doubled our outreach in just one winter drive.",
  },
  {
    id: "tr",
    src: "https://images.unsplash.com/photo-1676233663661-b627bc469e14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMG5nbyUyMGltYWdlcyUyMGZvciUyMGZyZWV8ZW58MHx8MHx8fDA%3D",
    className: "testimonials__avatar testimonials__avatar--tr",
    parallaxFactor: 0.021,
    floatDuration: 7.1,
    floatDelay: 0.8,
    opinion: "Every donation receipt came through, no chasing needed.",
  },
  {
    id: "mr1",
    src: "https://images.unsplash.com/photo-1661633976031-805921c14d27?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "testimonials__avatar testimonials__avatar--mr1",
    parallaxFactor: 0.008,
    floatDuration: 6.9,
    floatDelay: 1.8,
    opinion: "Remarkable care in how they handle every family.",
  },
  {
    id: "mr2",
    src: "https://media.istockphoto.com/id/1161592438/photo/poor-indian-children-asking-for-fresh-water-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=pqX8LTmPMvIbGsJSRgsuXRn-owICMVuLcKkNbvkINSo=",
    className: "testimonials__avatar testimonials__avatar--mr2",
    parallaxFactor: 0.013,
    floatDuration: 8.6,
    floatDelay: 0.3,
    opinion: "Loved every step of organising the health camp.",
  },
  {
    id: "br",
    src: "https://images.unsplash.com/photo-1702742969430-1bee1df006f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlpYW4lMjBuZ28lMjBpbWFnZXMlMjBmcmVlfGVufDB8fDB8fHww",
    className: "testimonials__avatar testimonials__avatar--br",
    parallaxFactor: 0.026,
    floatDuration: 9.0,
    floatDelay: 1.0,
    opinion: "My company now matches every employee donation here.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeBubble, setActiveBubble] = useState(0);
  const [bubbleVisible, setBubbleVisible] = useState(true);

  useEffect(() => {
    const DISPLAY_MS = 3500;
    const EXIT_MS = 400;

    const interval = setInterval(() => {
      setBubbleVisible(false);

      setTimeout(() => {
        setActiveBubble((prev) => (prev + 1) % floatingAvatars.length);
        setBubbleVisible(true);
      }, EXIT_MS);
    }, DISPLAY_MS);

    return () => clearInterval(interval);
  }, []);

  const sectionRef = useRef(null);
  const t = testimonials[active];

  /* Cursor-based parallax */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setMouse({
        x: (e.clientX - cx) / (rect.width / 2),
        y: (e.clientY - cy) / (rect.height / 2),
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="testimonials" id="impact" ref={sectionRef}>
      {/* Floating avatars */}
      {floatingAvatars.map((a, index) => {
        const px = mouse.x * a.parallaxFactor * 80;
        const py = mouse.y * a.parallaxFactor * 80;
        const isActive = index === activeBubble;
        return (
          <div
            key={a.id}
            className={`${a.className}${isActive ? " testimonials__avatar--bubble-active" : ""}`}
            style={{
              "--float-duration": `${a.floatDuration}s`,
              "--float-delay": `${a.floatDelay}s`,
              transform: `translate(${px}px, ${py}px)`,
            }}
          >
            <img src={a.src} alt="community member" loading="lazy" />
            {isActive && (
              <div className={`testi-bubble${bubbleVisible ? " testi-bubble--in" : " testi-bubble--out"}`}>
                {a.opinion}
              </div>
            )}
          </div>
        );
      })}

      <div className="testimonials__inner">
        {/* Impact stats */}
        <div className="testimonials__stats">
          <div className="testimonials__stat">
            <span className="testimonials__stat-num">12,000+</span>
            <span className="testimonials__stat-label">Lives touched</span>
          </div>
          <div className="testimonials__stat">
            <span className="testimonials__stat-num">450+</span>
            <span className="testimonials__stat-label">Active volunteers</span>
          </div>
          <div className="testimonials__stat">
            <span className="testimonials__stat-num">3</span>
            <span className="testimonials__stat-label">Cities reached</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="testimonials__heading">
          <span className="testimonials__pill">What</span>{" "}
          <span className="testimonials__heading-plain">our community</span>
          <br />
          <span className="testimonials__heading-plain">says </span>
          <span className="testimonials__underline">
            About Us
            <svg
              viewBox="0 0 372 33"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="testimonials__underline-svg"
            >
              <path
                d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5"
                stroke="#FFC250"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </span>
        </h2>

        {/* Card */}
        <div className="testimonials__card">
          <span className="testimonials__quote testimonials__quote--open">&ldquo;</span>
          <p className="testimonials__text">{t.text}</p>
          <span className="testimonials__quote testimonials__quote--close">&rdquo;</span>

          <div className="testimonials__author">
            <img className="testimonials__author-img" src={t.avatar} alt={t.name} />
            <div>
              <strong className="testimonials__author-name">{t.name}</strong>
              <span className="testimonials__author-role">{t.role}</span>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot${i === active ? " testimonials__dot--active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


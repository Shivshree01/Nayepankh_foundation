import React, { useEffect, useRef } from "react";
import "./Hero.css";

const floatConfig = [
  [6, 5, 0],
  [8, 8, 0.5],
  [7, 4, 1.0],
  [9, 6, 0.3],
  [5, 5, 0.8],
  [7, 3, 0.2],
  [6, 8, 1.2],
  [8, 4, 0.6],
];

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const lines = heroRef.current?.querySelectorAll(".hero__line");
    if (!lines) return;
    lines.forEach((line, i) => {
      line.style.animationDelay = `${i * 0.22}s`;
    });
  }, []);

  const circles = [
    {
      id: 1,
      className: "circle circle--bottom-left-1",
      image: "https://images.unsplash.com/photo-1699873728107-9ce97c8f78eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMHdvbWFuJTIwZmFjZSUyMHJ1cmFsfGVufDB8fDB8fHww",
      alt: "Child smiling",
    },
    {
      id: 2,
      className: "circle circle--bottom-left-2",
      image: "https://images.unsplash.com/photo-1775384080219-a3201a1f8e11?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMHdvbWFuJTIwZmFjZSUyMHJ1cmFsfGVufDB8fDB8fHww",
      alt: "Volunteer at work",
    },
    {
      id: 3,
      className: "circle circle--bottom-center-1",
      image: "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=BpJcZ42YnsP6KZmsdmEsArWBECDspsljlPfINuZ0l_U=",
      alt: "Community gathering",
    },
    {
      id: 4,
      className: "circle circle--bottom-center-2",
      image: "https://media.istockphoto.com/id/1176766131/photo/a-poor-homeless-happy-smiling-orphan-child.webp?a=1&b=1&s=612x612&w=0&k=20&c=QeuGBD_iWqdEWUGo2z-9zzbkPTwHizjg_OqJ7oENnmM=",
      alt: "Young student",
    },
    {
      id: 5,
      className: "circle circle--bottom-mid-1",
      image: "https://media.istockphoto.com/id/1344964565/photo/teacher-distributing-healthy-meal-to-students-in-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=W9Y-eiZWCoA7xlSejkBGLPSt6wkj5iQGmvB5ahytH8M=",
      alt: "Education program",
    },
    {
      id: 6,
      className: "circle circle--bottom-mid-2",
      image: "https://images.unsplash.com/photo-1569173675610-42c361a86e37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwbmdvJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D",
      alt: "Woman volunteer",
    },
    {
      id: 7,
      className: "circle circle--bottom-right-1",
      image: "https://images.unsplash.com/photo-1618245472177-2a74ad3b994a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMG5nbyUyMGNoaWxkcmVufGVufDB8fDB8fHww",
      alt: "Community member",
    },
    {
      id: 8,
      className: "circle circle--bottom-right-2",
      image: "https://media.istockphoto.com/id/1175282132/photo/a-poor-young-villager-boy-is-getting-free-books-by-donation-agency.webp?a=1&b=1&s=612x612&w=0&k=20&c=j2HFFizWjNheLj9_APwJJDIQLyJVF8zFvi63ZP_64TQ=",
      alt: "Happy child",
    },
  ];

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Registration badge */}
      <div className="hero__badge">
        <span className="hero__badge-dot" />
        UP Govt. · 80G &amp; 12A Registered NGO
      </div>

      {/* Headline block */}
      <div className="hero__text-block">
        <h1 className="hero__heading">
          <span className="hero__line">
            It's that{" "}
            <span className="hero__highlight hero__highlight--underline">
              easy
              <svg
                viewBox="0 0 372 33"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="hero__underline-svg"
              >
                <path
                  className="hero__underline-path"
                  d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5"
                  stroke="#FF6B35"
                  strokeWidth="6"
                  fill="none"
                />
              </svg>
            </span>{" "}
            to bring
          </span>
          <br />
          <span className="hero__line">
            a{" "}
            <span className="hero__highlight hero__highlight--pink">Smile</span>{" "}
            on their
          </span>
          <br />
          <span className="hero__line">
            <span className="hero__highlight hero__highlight--green">faces.</span>
          </span>
        </h1>

        <p className="hero__subtext">
          We don't ask for much — just help us with what you can.
          <br />
          Be it Money, Skill, or Your Time.
        </p>

        <div className="hero__cta-row">
          <a
            href="https://nayepankh.com/donate"
            className="hero__btn hero__btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Now
          </a>
          <a href="#about" className="hero__btn hero__btn--ghost">
            Learn More →
          </a>
        </div>
      </div>

      {/* Decorative squiggle */}
      <svg
        className="hero__squiggle"
        viewBox="0 0 420 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M400 10 C360 40, 300 20, 260 60 C220 100, 280 140, 240 180 C200 220, 140 200, 100 240"
          stroke="#FF6B35"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Saffron accent shape */}
      <div className="hero__accent-saffron" aria-hidden="true" />

      {/* Circular images strip */}
      <div className="hero__circles-strip">
        {circles.map((c) => (
          <div
            key={c.id}
            className={c.className}
            style={{
              "--float-duration": `${floatConfig[c.id - 1][0]}s`,
              "--float-amp": `${floatConfig[c.id - 1][1]}px`,
              "--float-delay": `${floatConfig[c.id - 1][2]}s`,
            }}
          >
            <img
              src={c.image}
              alt={c.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
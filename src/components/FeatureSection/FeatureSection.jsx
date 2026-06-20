import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./FeatureSection.css";

/* ── Reusable animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const borderReveal = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

const underlineDraw = {
  hidden: {
    pathLength: 0,
    opacity: 1,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

/* ── useInView helper hook (once) ── */
function useSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return { ref, inView };
}

const FeatureSection = () => {
  const row1 = useSection();
  const row2 = useSection();
  const border = useSection();

  return (
    <section className="feature" id="about">
      {/* Connecting SVG Line */}
      <div className="feature__wave" aria-hidden="true">
        <svg
          viewBox="0 0 1483 654"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="waveShadow"
              x="0"
              y="0"
              width="1502.99"
              height="653.604"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="16" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
            </filter>
          </defs>

          <path
            d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727"
            stroke="#FF6B35"
            strokeWidth="5"
          />
        </svg>
      </div>

      {/* ── Saffron blur blob ── */}
      <div className="feature__blur-blob" aria-hidden="true" />

      {/* ── Tilted accent border ── */}
      <motion.div
        ref={border.ref}
        className="feature__tilted-border"
        aria-hidden="true"
        variants={borderReveal}
        initial="hidden"
        animate={border.inView ? "visible" : "hidden"}
      />

      <div className="feature__container">

        {/* ══════════════════════════════
            ROW 1 — About Us
            ══════════════════════════════ */}
        <div className="feature__row feature__row--left-text" ref={row1.ref}>

          {/* Text block 1 */}
          <div className="feature__text-block feature__text-block--1">

            <span className="feature__eyebrow">About Us</span>

            <motion.h2
              className="feature__heading"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={row1.inView ? "visible" : "hidden"}
            >
              Think global,
              <br />
              act{" "}
              <span className="feature__pill feature__pill--green">local</span>
              <motion.span
                className="feature__underline-draw"
                aria-hidden="true"
                variants={underlineDraw}
                initial="hidden"
                animate={row1.inView ? "visible" : "hidden"}
              >
                <svg
                  viewBox="0 0 372 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5"
                    stroke="#FFC250"
                    strokeWidth="5"
                  />
                </svg>
              </motion.span>
            </motion.h2>

            <motion.p
              className="feature__body"
              variants={fadeUp}
              custom={0.18}
              initial="hidden"
              animate={row1.inView ? "visible" : "hidden"}
            >
              NayePankh Foundation is a non-governmental organisation with a
              strong desire to help the society and make it a better place
              for all. By doing everything in our power, and with your vital
              support, we work to make our vision successful. Service to
              mankind is service to god — let's revolutionise society
              together.
            </motion.p>

            <motion.a
              href="https://nayepankh.com/about-us"
              className="feature__readmore"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={0.32}
              initial="hidden"
              animate={row1.inView ? "visible" : "hidden"}
            >
              <span className="feature__readmore-text">Learn more</span>
              <span className="feature__readmore-arrow" aria-hidden="true">→</span>
            </motion.a>
          </div>

          {/* Circle image 1 */}
          <motion.div
            className="feature__circle-wrap feature__circle-wrap--1"
            variants={fadeRight}
            initial="hidden"
            animate={row1.inView ? "visible" : "hidden"}
          >
            <div className="feature__square" aria-hidden="true" />
            <div className="feature__circle feature__circle--float">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80"
                alt="NayePankh volunteers distributing aid"
                className="feature__circle-img"
              />
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════
            ROW 2 — Our Mission
            ══════════════════════════════ */}
        <div className="feature__row feature__row--right-text" ref={row2.ref}>

          {/* Circle image 2 */}
          <motion.div
            className="feature__circle-wrap feature__circle-wrap--2"
            variants={fadeLeft}
            initial="hidden"
            animate={row2.inView ? "visible" : "hidden"}
          >
            <div className="feature__triangle feature__triangle--top-left" aria-hidden="true" />
            <div className="feature__circle feature__circle--float-alt">
              <img
                src="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=600&q=80"
                alt="Children supported by NayePankh programs"
                className="feature__circle-img"
              />
            </div>
            <div className="feature__triangle feature__triangle--bottom-right" aria-hidden="true" />
          </motion.div>

          {/* Text block 2 */}
          <div className="feature__text-block feature__text-block--2">

            <div className="feature__tag-pill" aria-hidden="true" />

            <span className="feature__eyebrow">Our Mission</span>

            <motion.h2
              className="feature__heading"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={row2.inView ? "visible" : "hidden"}
            >
              One of India's biggest
              <br />
              student-led NGOs
              <motion.span
                className="feature__underline-draw"
                aria-hidden="true"
                variants={underlineDraw}
                initial="hidden"
                animate={row2.inView ? "visible" : "hidden"}
              >
                <svg
                  viewBox="0 0 372 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5"
                    stroke="#FFC250"
                    strokeWidth="4"
                  />
                </svg>
              </motion.span>
            </motion.h2>

            <motion.p
              className="feature__body"
              variants={fadeUp}
              custom={0.18}
              initial="hidden"
              animate={row2.inView ? "visible" : "hidden"}
            >
              With operations extended across Kanpur, Ghaziabad, and various
              other cities, we are proudly UP Government, 80G &amp; 12A
              registered. Every rupee you give is put to work, and every
              donation is tax-exempt under Section 80G of the Indian Income
              Tax Act.
            </motion.p>

            <motion.a
              href="https://nayepankh.com/our-certificates"
              className="feature__readmore"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={0.32}
              initial="hidden"
              animate={row2.inView ? "visible" : "hidden"}
            >
              <span className="feature__readmore-text">Our certificates</span>
              <span className="feature__readmore-arrow" aria-hidden="true">→</span>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;
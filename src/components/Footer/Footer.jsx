import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="join-us">
      {/* Join the Team Section */}
      <div className="footer__newsletter">
        {/* Decorative curved arrows */}
        <div className="footer__arrows" aria-hidden="true">
          <svg
            className="footer__arrow footer__arrow--1"
            viewBox="0 0 178 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z"
              fill="#FF6B35"
            />
          </svg>

          <svg
            className="footer__arrow footer__arrow--2"
            viewBox="0 0 178 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z"
              fill="#FF6B35"
            />
          </svg>
        </div>

        {/* Saffron decorative shape */}
        <div className="footer__purple-shape" aria-hidden="true" />

        <div className="footer__newsletter-content">
          <span className="footer__eyebrow">Join our team</span>
          <h2 className="footer__heading">
            "If we all do something,
            <br />
            together there is no
            <br />
            problem we cannot solve!"
          </h2>
          <p className="footer__subtext">
            — Prashant Shukla, Founder &amp; President, NayePankh Foundation
          </p>
          <a
            href="https://nayepankh.com/donate"
            className="footer__subscribe-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="footer__divider" role="separator" />

      {/* Trust strip */}
      <div className="footer__trust">
        <p>
          All our efforts are made possible only because of your support.
          Donations are tax-exempt under 80G of the Indian Income Tax Act.
        </p>
      </div>

      {/* Links Grid */}
      <div className="footer__links">
        {/* Column 1: Organisation */}
        <nav className="footer__col" aria-label="Organisation links">
          <h3 className="footer__col-heading">Organisation</h3>
          <ul className="footer__col-list">
            <li><a href="#home" className="footer__link">Home</a></li>
            <li><a href="#about" className="footer__link">About Us</a></li>
            <li><a href="#programs" className="footer__link">Programs</a></li>
            <li>
              <a
                href="https://nayepankh.com/our-certificates"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Certificates
              </a>
            </li>
          </ul>
        </nav>

        {/* Column 2: Terms & Policies */}
        <nav className="footer__col" aria-label="Terms and policies links">
          <h3 className="footer__col-heading">Terms &amp; Policies</h3>
          <ul className="footer__col-list">
            <li>
              <a href="https://nayepankh.com/privacy-policy" className="footer__link" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://nayepankh.com/terms-and-conditions" className="footer__link" target="_blank" rel="noopener noreferrer">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="https://nayepankh.com/cancellation-and-refund" className="footer__link" target="_blank" rel="noopener noreferrer">
                Cancellation &amp; Refund
              </a>
            </li>
            <li>
              <a href="https://nayepankh.com/cancellation-and-refund" className="footer__link" target="_blank" rel="noopener noreferrer">
                Shipping &amp; Exchange
              </a>
            </li>
          </ul>
        </nav>

        {/* Column 3: Follow Us */}
        <nav className="footer__col footer__col--social" aria-label="Social media links">
          <h3 className="footer__col-heading">Follow Us</h3>
          <ul className="footer__col-list">
            <li><a href="#" className="footer__link">Instagram</a></li>
            <li><a href="#" className="footer__link">LinkedIn</a></li>
            <li><a href="#" className="footer__link">YouTube</a></li>
            <li><a href="#" className="footer__link">Twitter</a></li>
          </ul>
        </nav>

        {/* Column 4: Contact */}
        <address className="footer__col footer__col--contact">
          <h3 className="footer__col-heading">Get in Touch</h3>
          <ul className="footer__col-list">
            <li className="footer__contact-item">
              <a href="tel:+918318500748" className="footer__link">+91 83185 00748</a>
            </li>
            <li className="footer__contact-item">
              <a href="mailto:contact@nayepankh.com" className="footer__link">contact@nayepankh.com</a>
            </li>
            <li className="footer__contact-item">
              <a
                href="https://nayepankh.com/contact-us"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </address>
      </div>

      {/* Copyright */}
      <div className="footer__copyright">
        <p>© {new Date().getFullYear()} NayePankh Foundation. UP Govt. | 80G &amp; 12A Registered NGO.</p>
      </div>
    </footer>
  );
};

export default Footer;
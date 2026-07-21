import React from "react";

function Footer() {
  return (
    <footer className="bg-body-tertiary border-top">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4">
        <p className="mb-0 text-center text-md-start">
          &copy; 2020 Copyright:{" "}
          <a
            className="text-body"
            href="https://www.linkedin.com/in/isha-khurana-392224210/"
          >
            Isha Khurana
          </a>
        </p>

        <nav className="d-flex align-items-center gap-2" aria-label="Social links">
          <a
            className="btn btn-link btn-floating btn-lg text-body"
            href="mailto:khuranaisha00@gmail.com"
            aria-label="Email Isha Khurana"
          >
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-body"
            href="https://www.linkedin.com/in/isha-khurana-392224210/"
            target="_blank"
            rel="noreferrer"
            aria-label="Isha Khurana on LinkedIn"
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-body"
            href="https://github.com/isha2610"
            target="_blank"
            rel="noreferrer"
            aria-label="Isha Khurana on GitHub"
          >
            <i className="fab fa-github" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
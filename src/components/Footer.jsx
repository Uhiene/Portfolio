import React from "react";

const Footer = () => {

  return (
    <footer className="s-footer">
      <div className="row">
        {/* Copyright Section */}
        <div className="column ss-copyright">
          <span>
            © {new Date().getFullYear()} Princess. All rights reserved.
          </span>
          <span>
            Built with ❤️ by 
            <a
              href="https://codeduchess.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{marginLeft: "8px"}}
            >
              Princess
            </a>
          </span>
        </div>

        {/* Back to Top Link */}
        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="s-contact target-section">
      <div className="row contact-top">
        <div className="column lg-12">
          <h2 className="text-pretitle">Get In Touch</h2>
          <p className="h1">
            I&apos;d love to hear from you! Whether you have a question, need
            assistance, or just want to discuss your project ideas, feel free to
            drop me a message.
          </p>
        </div>
      </div>

      <div className="row contact-bottom">
        <div className="column lg-3 md-5 tab-6 stack-on-550 contact-block">
          <h3 className="text-pretitle">Reach me at</h3>
          <p className="contact-links">
            <a href="mailto:sayhello@luther.com" className="mailtoui">
              princessuhiene@gmail.com
            </a>{" "}
            <br />
            <a>+234 812 408 1499</a>
          </p>
        </div>

        {/* Social Links */}
        <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
          <h3 className="text-pretitle">Social</h3>
          <ul className="contact-social">
            <li>
              <a href="https://www.linkedin.com/in/princess-uhiene-399470198/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/Chenemi_U">Twitter</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@codeDuchess">Youtube</a>
            </li>
          </ul>
        </div>

        {/* Say Hello Button */}
        <div className="column lg-4 md-12 contact-block">
          <a
            href="mailto:princessuhi@gmail.com"
            className="mailtoui btn btn--medium u-fullwidth contact-btn"
          >
            Say Hello.
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

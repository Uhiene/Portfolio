import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="border-t border-ash1 pt-10 pb-20 px-24">
      <div className="flex justify-between items-center">
        {/* Copyright Section */}
        <div className="text-ash3 font-extralight">
          <span>
            © {new Date().getFullYear()} Princess. All rights reserved. 
          </span>
          <span className="ml-2">
             Built with ❤️ by
            <a
              href="https://codeduchess.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "8px" }}
              className="text-ash"
            >
              Princess
            </a>
          </span>
        </div>

        {/* Back to Top Link */}
        <div>
          <a
            className="text-ash3 text-5xl"
            title="Back to Top"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <IoIosArrowRoundUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

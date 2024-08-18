import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between mb-8" id="footer-section">
        <span className="text-sm">
          © 2024 Jesús Adrián Berdugo Pertuz. All rights reserved.
        </span>
        <a
          href="https://github.com/Whomy09/my-personal-library"
          target="_blank"
        >
          <FaGithub className="text-3xl" />
        </a>
      </footer>
    </>
  );
};

export default Footer;

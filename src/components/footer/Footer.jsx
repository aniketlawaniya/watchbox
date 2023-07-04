import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="inline-style-list no-style-list footer-list">
        <li>
          <a className="footer-links" href="https://github.com/aniketlawaniya" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a className="footer-links" href="https://twitter.com/aniketlawania" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            className="footer-links"
            href="https://www.linkedin.com/in/aniketlawaniya/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <p>© 2023 WatchBox</p>
    </footer>
  );
};

export { Footer };

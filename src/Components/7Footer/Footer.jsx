import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer" id="Footer">
      <div className="SocialContainer">
              <a
                href="https://github.com/Imran751"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../Assets/git.png")} alt="GitHub" />
              </a>
              <a
                href="https://www.youtube.com/@muhammadimranjhang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../Assets/youtube.png")} alt="YouTube" />
              </a>
              <a
                href="https://twitter.com/muhammadimranjhang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../Assets/x.png")} alt="Twitter" />
              </a>
              <a
                href="https://www.instagram.com/muhammadimranjhang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../Assets/insta.png")} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammadimranfullstackdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../Assets/linkedin.png")}
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className="allrights">
              <p>All rights are reserved by <span>Muhammad Imran</span></p>
            </div>
    </div>
  );
}

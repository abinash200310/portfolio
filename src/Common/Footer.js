import React from "react";
import "./Footer.css"; // Assuming you have CSS styles for your footer

const Contact = () => {
  const openResume = () => {
    window.open('/images/Abinash.pdf', '_blank');
  };
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="/">Home</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="about">About</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="my_skills">My Skills</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content pt-4 ">
                    <button className="resume_button" onClick={openResume}>View Resume</button>
                    
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>

                <ul className="social-footer2">
                <li>
                    <a
                      title="gmail"
                      
                      href="mailto:abinashind3@gmail.com"
                    >
                      <img
                        alt="gmail"
                        width="30"
                        height="30"
                        src="/images/mail.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      title="githup"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.githup.com/abinasha42?igsh=MXA3eWNlb3d1eDdlYQ=="
                    >
                      <img
                        alt="githup"
                        width="30"
                        height="30"
                        src="/images/githup.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      title="linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/abinashind3"
                    >
                      <img
                        alt="linkedin"
                        width="30"
                        height="30"
                        src="/images/linkedin.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a title="youtube" href="https://www.youtube.com/@abinash.a3755">
                      <img
                        alt="youtube"
                        width="30"
                        height="30"
                        src="/images/y2.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100072124950818&mibextid=ZbWKwL"
                      title="Facebook"
                    >
                      <img
                        alt="Facebook"
                        width="30"
                        height="30"
                        src="/images/fb.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/abinash_fsd?t=b5E6MN6zuFBTB-CUKzBy5Q&s=09"
                     
                      title="Twitter"
                    >
                      <img
                        alt="Twitter"
                        width="30"
                        height="30"
                        src="/images/x.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      title="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/abinasha42?igsh=MXA3eWNlb3d1eDdlYQ=="
                    >
                      <img
                        alt="instagram"
                        width="30"
                        height="30"
                        src="/images/insta.png"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

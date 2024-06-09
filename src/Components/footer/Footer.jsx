
import data from "../../mocks/ProjectData";

const Footer = () => {
    const { aboutData } = data;
    return (
        <div className="footer">
            <div className="footer__content">
                <p>Sofia Torres | Frontend Developer ©️</p>
                <div className="footer__social-icons">
                    <a
                        href={aboutData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__social-link"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                        href={aboutData.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__social-link"
                    >
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;

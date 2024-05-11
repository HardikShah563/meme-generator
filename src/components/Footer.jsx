// importing icons
import { FaHeart } from "react-icons/fa";
import { GrLink, GrMail, GrInstagram, GrLinkedinOption, GrTwitter } from "react-icons/gr";


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <hr />

                <h3 className="flex">
                    Developed with <FaHeart fill="red" /> by <a href="https://www.hellohardik.xyz">Hello Hardik</a>
                </h3>

                <div className="flex">
                    <a target="_blank" className="social-media-icon" href="https://www.hellohardik.xyz/">
                        <GrLink />
                    </a>
                    <a target="_blank" className="social-media-icon" href="mailto:hardikts@gmail.com">
                        <GrMail />
                    </a>
                    <a target="_blank" className="social-media-icon" href="https://www.linkedin.com/in/hardik-shah-62a7851b2/">
                        <GrLinkedinOption />
                    </a>
                    <a target="_blank" className="social-media-icon" href="https://www.instagram.com/hellohardik.xyz/">
                        <GrInstagram />
                    </a>
                    <a target="_blank" className="social-media-icon" href="https://twitter.com/HardikS31529775/">
                        <GrTwitter />
                    </a>
                </div>
            </footer>
        </>
    );
};

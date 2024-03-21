import { Container } from "../Container/Container";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import "./style.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <a className="anchor" id="footer"></a>
      <Container>
        <div className="footer-box">
          <a className="logo" href="#">
            Dizenfeksiya
          </a>
          <div className="footer-wrapper">
            <div className="footer-right">
              <a className="location-box" href="">
                {" "}
                <IoLocationOutline className="footer-icon" />
                <p className="footer-text">Uzbekiston, Toshkent shahri</p>
              </a>

              <a className="footer-tel" href="tel:+998935155040">
                {" "}
                <BsTelephone className="footer-icon" />
                <p className="footer-text">+998 93 515 50 40</p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

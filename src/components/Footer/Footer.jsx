import { Container } from "../Container/Container";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Logo from "../../assets/img/Dezinfeksiya-photo.png";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <a className="anchor" id="footer"></a>
      <Container>
        <div className="footer-box">
          <a className="logo" href="#">
            <img className="header-logo" src={Logo} alt="" />
          </a>
          <div className="footer-wrapper">
            <div className="footer-right">
              <a className="location-box" href="#">
                {" "}
                <IoLocationOutline className="footer-icon" />
                <p className="footer-text">{t("location")}</p>
              </a>

              <a className="footer-tel" href="tel:+998935155040">
                {" "}
                <BsTelephone className="footer-icon" />
                <p className="footer-text">+998 99 119 99 33</p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

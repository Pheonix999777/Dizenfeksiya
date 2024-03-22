import { Container } from "../Container/Container";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./style.scss";

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18next.changeLanguage(selectedLanguage);
  };

  const { t } = useTranslation();

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <Container>
        <div className="header-div">
          <a className="logo" href="#">
            Dezinfeksiya
          </a>
          <div className="header-right">
            <nav className={`navbar  ${showNavbar && "active"}`}>
              <button id="menu" onClick={handleShowNavbar}>
                <IoMdClose />
              </button>
              <ul className="ul-nav">
                <li className="ul-li">
                  <a
                    className="nav-links"
                    href="#home"
                    onClick={handleShowNavbar}
                  >
                    {t("home")}
                  </a>
                </li>
                <li className="ul-li">
                  <a
                    className="nav-links"
                    href="#about"
                    onClick={handleShowNavbar}
                  >
                    {t("about")}
                  </a>
                </li>
                <li className="ul-li">
                  <a
                    className="nav-links"
                    href="#service"
                    onClick={handleShowNavbar}
                  >
                    {t("service")}
                  </a>
                </li>
                <li className="ul-li">
                  <a
                    className="nav-links"
                    href="#faq"
                    onClick={handleShowNavbar}
                  >
                    {t("faq")}
                  </a>
                </li>
              </ul>
              <a
                className="nav-link-box"
                href="#footer"
                onClick={handleShowNavbar}
              >
                {" "}
                <button className="nav-btn">{t("contact")}</button>
              </a>
            </nav>
            <select
              className="select"
              name=""
              id=""
              onChange={handleLanguageChange}
            >
              <option value={"uz"}>Uzbek</option>
              <option value={"ru"}>Russian</option>
            </select>
            <a href="#footer">
              {" "}
              <button className="btn">{t("contact")}</button>
            </a>
          </div>
          <div
            className={showNavbar ? "headr-dark" : ""}
            onClick={handleShowNavbar}
          ></div>
          <button
            className="header-btn"
            id="menu-icon"
            onClick={handleShowNavbar}
          >
            <HiMenu />
          </button>
        </div>
      </Container>
    </header>
  );
};

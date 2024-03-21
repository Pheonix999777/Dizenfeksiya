import { Container } from "../Container/Container";
import { Select } from "../Select/Select";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
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

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <Container>
        <div className="header-div">
          <a className="logo" href="#">
            Dizenfeksiya
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
                    Asosiy
                  </a>
                </li>
                <li className="ul-li">
                  <a
                    className="nav-links"
                    href="#about"
                    onClick={handleShowNavbar}
                  >
                    Biz xaqimizda
                  </a>
                </li>
                <li className="ul-li">
                  <a
                    className="nav-links"
                    href="#service"
                    onClick={handleShowNavbar}
                  >
                    Xizmatlar
                  </a>
                </li>
                <li className="ul-li">
                  <a
                    className="nav-links"
                    href="#faq"
                    onClick={handleShowNavbar}
                  >
                    Faq
                  </a>
                </li>
              </ul>
              <a
                className="nav-link-box"
                href="#footer"
                onClick={handleShowNavbar}
              >
                {" "}
                <button className="nav-btn">Bog’lanish</button>
              </a>
            </nav>
            <Select />
            <a href="#footer">
              {" "}
              <button className="btn">Bog’lanish</button>
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

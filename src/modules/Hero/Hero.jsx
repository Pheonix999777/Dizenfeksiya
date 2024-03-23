import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "../../components/Container/Container";
import heroImg from "../../assets/img/WnYJyJjWq3U 1.png";
import "./style.scss";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero-div">
          <div className="hero-wrapper">
            <h1 className="title">{t("dez")}</h1>
            <p className="hero-text">{t("p")}</p>
            <a href="#footer" className="btn-div">
              <button className="btn">{t("contact")}</button>
            </a>
          </div>
          <div className="right-img">
            <img className="hero-img" src={heroImg} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

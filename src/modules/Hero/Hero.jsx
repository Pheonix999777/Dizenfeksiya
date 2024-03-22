import { Container } from "../../components/Container/Container";
import heroImg from "../../assets/img/WnYJyJjWq3U 1.png";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <a className="anchor" id="home"></a>
      <Container>
        <div className="hero-div">
          <div data-aos="fade-right" className="hero-wrapper">
            <h1 className="title"> {t("dez")} </h1>
            <p className="hero-text">{t("p")}</p>

            <a className="btn-div" href="#footer">
              <button className="btn">{t("contact")}</button>
            </a>
          </div>
          <div className="right-img">
            <img className="hero-img " src={heroImg} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

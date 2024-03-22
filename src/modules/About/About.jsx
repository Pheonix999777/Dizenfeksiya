import { Container } from "../../components/Container/Container";
import { BsLightningCharge } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about">
      <Container>
        <a className="anchor" id="about"></a>
        <h2 className="about-title">{t("xaq")}</h2>
        <ul className="about-ul">
          <li className="about-cards">
            <BsLightningCharge className="ul-icons" />
            <h3 className="about-cards-title">{t("tez")}</h3>
            <p className="about-cards-text">{t("text")}</p>
          </li>

          <li className="about-cards">
            <PiMedal className="ul-icons" />
            <h3 className="about-cards-title">{t("yet")}</h3>
            <p className="about-cards-text">{t("text2")}</p>
          </li>

          <li className="about-cards">
            <BsLightningCharge className="ul-icons" />
            <h3 className="about-cards-title">{t("maq")}</h3>
            <p className="about-cards-text">{t("text3")}</p>
          </li>
        </ul>

        <div className="about-wrapper">
          <div className="about-main">
            <div className="about-div">
              <h2 className="about-wrapper-title">{t("zar")}</h2>
              <p className="about-text">{t("oo")}</p>
              <a href="#footer">
                <button className="btn">{t("contact")}</button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

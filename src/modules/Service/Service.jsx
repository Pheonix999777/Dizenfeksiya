import { Container } from "../../components/Container/Container";
import cardImg from "../../assets/img/dezinyeksiya-bea8e70f.png";
import cardImg2 from "../../assets/img/derazatsiya-83b522bf.png";
import cardImg3 from "../../assets/img/dizinfeksiya-52660f2d.png";
import cardImage from "../../assets/img/klopi-6c1f42ef.jpg";
import cardImage2 from "../../assets/img/tarakan-d8b430bd.jpg";
import cardImage3 from "../../assets/img/skarpion-6902a7a9.jpg";
import cardImage4 from "../../assets/img/grizuni-de8c9315.jpg";
import cardImage5 from "../../assets/img/bloxi-7e06d020.jpg";
import cardpht from "../../assets/img/obrazovaniye_s 2.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const Service = () => {
  const { t } = useTranslation();
  return (
    <section className="service">
      <a className="anchor" id="service"></a>
      <Container>
        <h2 className="service-title">{t("service")}</h2>
        <div className="service-text-div">
          <p className="service-word">{t("f")}</p>
        </div>
        <div className="service-div">
          <div className="service-card">
            <img
              className="service-card-img"
              src={cardImg3}
              alt=""
              width={300}
              height={300}
            />
            <div className="service-wrapper">
              <h3 className="service-wrapper-title">{t("title")}</h3>
              <p className="service-wrapper-text">{t("word")}</p>
            </div>
          </div>

          <div className="service-card">
            <img
              className="service-card-img"
              src={cardImg}
              alt=""
              width={300}
              height={300}
            />
            <div className="service-wrapper">
              <h3 className="service-wrapper-title">{t("title2")}</h3>
              <p className="service-wrapper-text">{t("word2")}</p>
            </div>
          </div>

          <div className="service-card">
            <img
              className="service-card-img"
              src={cardImg2}
              alt=""
              width={300}
              height={300}
            />
            <div className="service-wrapper">
              <h3 className="service-wrapper-title">{t("title3")}</h3>
              <p className="service-wrapper-text">{t("word3")}</p>
            </div>
          </div>
        </div>

        <div className="service-box">
          <h2 className="service-box-title">{t("title4")}</h2>
          <ul className="service-ul">
            <li className="service-list">
              <h3 className="service-card-title">{t("titles")}</h3>
              <p className="service-card-text">{t("text5")}</p>
              <div className="service-btn-box">
                <a href="#footer">
                  <button className="btn">Bog’lanish</button>
                </a>
                <img
                  className="service-img"
                  src={cardImage}
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
            </li>

            <li className="service-list">
              <h3 className="service-card-title">{t("titles2")}</h3>
              <p className="service-card-text">{t("text6")}</p>
              <div className="service-btn-box">
                <a href="#footer">
                  <button className="btn">{t("contact")}</button>
                </a>
                <img
                  className="service-img"
                  src={cardImage2}
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
            </li>

            <li className="service-list">
              <h3 className="service-card-title">{t("titles3")}</h3>
              <p className="service-card-text">{t("text7")}</p>
              <div className="service-btn-box">
                <a href="#footer">
                  <button className="btn">{t("contact")}</button>
                </a>
                <img
                  className="service-img"
                  src={cardImage3}
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
            </li>

            <li className="service-list">
              <h3 className="service-card-title">{t("titles4")}</h3>
              <p className="service-card-text">{t("text8")}</p>
              <div className="service-btn-box">
                <a href="#footer">
                  <button className="btn">{t("contact")}</button>
                </a>
                <img
                  className="service-img"
                  src={cardImage4}
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
            </li>

            <li className="service-list">
              <h3 className="service-card-title"> {t("titles5")} </h3>
              <p className="service-card-text">{t("text9")}</p>
              <div className="service-btn-box">
                <a href="#footer">
                  <button className="btn">{t("contact")}</button>
                </a>
                <img
                  className="service-img"
                  src={cardImage5}
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
            </li>
          </ul>
        </div>

        <div className="service-content">
          <img className="service-picture" src={cardpht} alt="" />
          <div className="service-content-div">
            <div className="service-flex">
              <AiFillCheckCircle className="service-content-icon" />
              <h3 className="service-content-text">{t("text10")}</h3>
              <a href="#footer">
                {" "}
                <button className="btn">{t("contact")}</button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

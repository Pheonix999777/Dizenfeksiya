import { Container } from "../../components/Container/Container";
import contactImg from "../../assets/img/contact-a5f11f68.png";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <div className="contact-box">
          <form className="form" action="#">
            <h2 className="form-title">{t("info")}</h2>
            <input className="inp" type="text" placeholder={t("name")} />
            <div className="inp-box">
              <div className="inp-plus">
                +998 <span className="inp-spn"></span>
              </div>
              <input className="inp-num" type="number" />
            </div>
            <button type="submit" className="from-btn">
              {t("yub")}
            </button>
          </form>

          <img className="contact-img" src={contactImg} alt="" />
        </div>
      </Container>
    </section>
  );
};

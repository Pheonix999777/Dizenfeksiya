import { Container } from "../../components/Container/Container";
import { BsLightningCharge } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import "./style.scss";
import i18next from "i18next";
import { useTransition } from "react";

export const About = () => {
  const { t } = useTransition();
  return (
    <section className="about">
      <Container>
        <a className="anchor" id="about"></a>
        <h2 className="about-title">Xaqida</h2>
        <ul className="about-ul">
          <li className="about-cards">
            <BsLightningCharge className="ul-icons" />
            <h3 className="about-cards-title">Tezda xizmat ko’rsatish</h3>
            <p className="about-cards-text">
              АРИЗАЛАР КУНИГА 24 СОАТ ҚАБУЛ ҚИЛИНАДИ. АГАР МУАММО ШОШИЛИНЧ
              БЎЛСА, БИЗ ДАРҲОЛ КЕТИШИМИЗ МУМКИН. ШУ БИЛАН БИРГА, СИФАТ МУКАММАЛ
              БЎЛИБ ҚОЛАДИ.
            </p>
          </li>

          <li className="about-cards">
            <PiMedal className="ul-icons" />
            <h3 className="about-cards-title">Yetuk mutahasislaimiz</h3>
            <p className="about-cards-text">
              БИЗНИНГ ХОДИМЛАРИМИЗ ҲАММА НАРСАГА ҒАМХЎРЛИК ҚИЛАДИ:
              ҲИСОБ-КИТОБЛАР, ХОНАНИ ТАЙЁРЛАШ, ҚАЙТА ИШЛАШ, ЯКУНИЙ ТОЗАЛАШ,
              ВЕНТИЛЯТСИЯ ВА НАЗОРАТ ТЕКШИРУВИ.
            </p>
          </li>

          <li className="about-cards">
            <BsLightningCharge className="ul-icons" />
            <h3 className="about-cards-title">Sizga maqul vaqtda</h3>
            <p className="about-cards-text">
              СИЗ ЎЗИНГИЗ УЧУН МАҚУЛ ВА ҚУЛАЙ ВАҚТНИ ТАНЛАНГ ВА БИЗГА МУРОЖАТ
              ҚИЛИНГ. СИЗГА КАФОЛАТЛАНГАН ВА САМАРАЛИ НАТИЖАНИ ОЛИБ БОРАМИЗ
            </p>
          </li>
        </ul>

        <div className="about-wrapper">
          <div className="about-main">
            <div className="about-div">
              <h2 className="about-wrapper-title">
                Klapa va zararli hashorot endi yo’q deb hisoblang !!!
              </h2>
              <p className="about-text">
                Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
                kompaniyamiz Mijozlarimiz bizdan mamnun
              </p>
              <a href="#footer">
                <button className="btn">Bog’lanish</button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

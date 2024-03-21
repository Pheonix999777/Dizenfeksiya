import { Container } from "../../components/Container/Container";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import "./style.scss";

export const Faq = () => {
  const [openItems, setOpenItems] = useState([false, false, false]);

  const updateToggle = (index) => {
    const updatedOpenItems = [...openItems];
    updatedOpenItems[index] = !updatedOpenItems[index];
    setOpenItems(updatedOpenItems);
  };

  return (
    <section className="faq">
      <a className="anchor" id="faq"></a>
      <Container>
        <div className="faq-box">
          <h2 className="faq-title">Faq</h2>
          <ul className="faq-ul">
            <li className="faq-list" onClick={() => updateToggle(0)}>
              <div className="faq-btn">
                <h4 className="faq-list-title">
                  {" "}
                  Зараркунан даларни йўқ қилиш қандай амалга оширилади?
                </h4>
                {openItems[0] ? (
                  <GoChevronUp className="faq-icon-up" />
                ) : (
                  <GoChevronDown className="faq-icon" />
                )}
              </div>
              <div className={openItems[0] ? "faq-open" : "faq-close"}>
                <p className="faq-text">
                  {" "}
                  Махсус асбоб-ускуналар ёрдамида инсектитсидлар аерозолли
                  туманга айланади ва девор қоғози, деворлар ва тахта плиталари
                  орасидаги енг кичик бўшлиқларга, кўзга кўринмас ҳашаротлар
                  учун потентсиал &apos;яшириш жойлари&apos; га киради.
                </p>
              </div>
            </li>

            <li className="faq-list" onClick={() => updateToggle(1)}>
              <div className="faq-btn">
                <h4 className="faq-list-title">
                  {" "}
                  Сиз фойдаланадиган <br /> дорилар хавфлими?
                </h4>
                {openItems[1] ? (
                  <GoChevronUp className="faq-icon-up" />
                ) : (
                  <GoChevronDown className="faq-icon" />
                )}
              </div>
              <div className={openItems[1] ? "faq-open" : "faq-close"}>
                <p className="faq-text">
                  {" "}
                  Препаратлар одамлар, уй ҳайвонлари ва ўсимликлар учун хавфли
                  емас. Аммо даволанишдан кейин хонани 40 дақиқа давомида
                  вентилятсия қилиш керак.
                </p>
              </div>
            </li>

            <li className="faq-list" onClick={() => updateToggle(2)}>
              <div className="faq-btn">
                <h4 className="faq-list-title">
                  {" "}
                  Менга уйимни
                  <br /> даво ланишга тайёрлаш нинг қандайдир усули керакми?
                </h4>
                {openItems[2] ? (
                  <GoChevronUp className="faq-icon-up" />
                ) : (
                  <GoChevronDown className="faq-icon" />
                )}
              </div>
              <div className={openItems[2] ? "faq-open" : "faq-close"}>
                <p className="faq-text">
                  {" "}
                  Асосан, идиш-товоқ ва шахсий гигиена воситаларини изолятсия
                  қилишингиз керак. Даволаш пайтида уй ҳайвонлари ҳам изолятсия
                  қилиниши керак. Мебел ёки маиший техникани кўчиришга ҳожат
                  йўқ.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

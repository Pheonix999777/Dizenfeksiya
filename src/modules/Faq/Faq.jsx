import { Container } from "../../components/Container/Container";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const Faq = () => {
  const [openItems, setOpenItems] = useState([false, false, false]);

  const updateToggle = (index) => {
    const updatedOpenItems = [...openItems];
    updatedOpenItems[index] = !updatedOpenItems[index];
    setOpenItems(updatedOpenItems);
  };

  const { t } = useTranslation();

  return (
    <section className="faq">
      <a className="anchor" id="faq"></a>
      <Container>
        <div className="faq-box">
          <h2 className="faq-title">{t("faq")}</h2>
          <ul className="faq-ul">
            <li className="faq-list" onClick={() => updateToggle(0)}>
              <div className="faq-btn">
                <h4 className="faq-list-title"> {t("faqtext")}</h4>
                {openItems[0] ? (
                  <GoChevronUp className="faq-icon-up" />
                ) : (
                  <GoChevronDown className="faq-icon" />
                )}
              </div>
              <div className={openItems[0] ? "faq-open" : "faq-close"}>
                <p className="faq-text"> {t("wrapper")}</p>
              </div>
            </li>

            <li className="faq-list" onClick={() => updateToggle(1)}>
              <div className="faq-btn">
                <h4 className="faq-list-title"> {t("faqtext2")}</h4>
                {openItems[1] ? (
                  <GoChevronUp className="faq-icon-up" />
                ) : (
                  <GoChevronDown className="faq-icon" />
                )}
              </div>
              <div className={openItems[1] ? "faq-open" : "faq-close"}>
                <p className="faqtext2"> {t("wrapper2")}</p>
              </div>
            </li>

            <li className="faq-list" onClick={() => updateToggle(2)}>
              <div className="faq-btn">
                <h4 className="faq-list-title"> {t("faqtext3")}</h4>
                {openItems[2] ? (
                  <GoChevronUp className="faq-icon-up" />
                ) : (
                  <GoChevronDown className="faq-icon" />
                )}
              </div>
              <div className={openItems[2] ? "faq-open" : "faq-close"}>
                <p className="faq-text"> {t("wrapper3")}</p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

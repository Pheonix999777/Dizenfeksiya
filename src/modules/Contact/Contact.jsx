import { Container } from "../../components/Container/Container";
import contactImg from "../../assets/img/contact-a5f11f68.png";
import "./style.scss";

export const Contact = () => {
  return (
    <section>
      <Container>
        <div className="contact-box">
          <form className="form" action="#">
            <h2 className="form-title">Malumotingizni qoldiring</h2>
            <input className="inp" type="text" placeholder="Ismingiz" />
            <div className="inp-box">
              <div className="inp-plus">
                +998 <span className="inp-spn"></span>
              </div>
              <input className="inp-num" type="number" />
            </div>
            <button type="submit" className="from-btn">
              Yuborish
            </button>
          </form>

          <img className="contact-img" src={contactImg} alt="" />
        </div>
      </Container>
    </section>
  );
};

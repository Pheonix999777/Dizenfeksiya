import { Container } from "../../components/Container/Container";
import heroImg from "../../assets/img/WnYJyJjWq3U 1.png";
import "./style.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <a className="anchor" id="home"></a>
      <Container>
        <div className="hero-div">
          <div className="hero-wrapper">
            <h1 className="title">Dizenfeksiya xizmati </h1>
            <p className="hero-text">
              Биз Тошкентда 10 йилдан бери профессионал дезинфексия ишларини
              олиб борамиз, шунинг учун биринчи марта зараркунандалардан қандай
              қутулишни биламиз.
            </p>

            <a className="btn-div" href="#footer">
              <button className="btn">Bog’lanish</button>
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

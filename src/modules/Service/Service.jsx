import { Container } from "../../components/Container/Container";
import cardImg from "../../assets/img/dezinyeksiya-bea8e70f.png";
import cardImage from "../../assets/img/klopi-6c1f42ef.jpg";
import cardpht from "../../assets/img/obrazovaniye_s 2.png";
import { AiFillCheckCircle } from "react-icons/ai";
import "./style.scss";

export const Service = () => {
  return (
    <section className="service">
      <a className="anchor" id="service"></a>
      <Container>
        <h2 className="service-title">Xizmatlar</h2>
        <div className="service-text-div">
          <p className="service-word">
            Biz sizga samarali va kafolatli xizmat taqdim etamiz.
          </p>
        </div>
        <div className="service-div">
          <div className="service-card">
            <img src={cardImg} alt="" width={300} height={300} />
            <div className="service-wrapper">
              <h3 className="service-wrapper-title">
                Дезинфексия - зарарли микро организмларни йўқ қилиш
              </h3>
              <p className="service-wrapper-text">
                Ҳар қандай дезинфексиянинг асосий вазифаси инфексиялар ва
                касалликларга олиб келиши мумкин бўлган хавфли
                микроорганизмларни йўқ қилишдир. Дезинфексия чоралари бўш жойни
                моғор, вирус, чириётган ва бактериялардан тозалайди. Жараён
                атроф-муҳитни патоген организмлардан тозалайди.Агар ўзингизни
                ёмон ҳис қилсангиз, чарчоқ ёки сабабсиз заифлашсангиз керак.
              </p>
            </div>
          </div>

          <div className="service-card">
            <img src={cardImg} alt="" width={300} height={300} />
            <div className="service-wrapper">
              <h3 className="service-wrapper-title">
                Дезинсексия - ҳашаротларни йўқ қилиш
              </h3>
              <p className="service-wrapper-text">
                Кўп одамлар биринчи навбатда &apos;дезинфестатсия&apos; сўзини
                исталмаган қўшниларидан - чойшаблар, ҳамамбöcеклер, чумолилар ва
                бошқа ҳашаротлардан халос бўлиш ёлини қидирганда дуч келишади.
                Уларнинг ўзлари йўқимсиз ва улар ҳам маълум инфектсия
                ташувчилари. Дезинсексия - бу ҳашаротларни: чивинлар, чивинлар,
                чойшаблар, тараканлар, куя, шомил, қобиқ қўнғизлари, ёғоч
                битлари ва бошқа судралиб юрувчи ва учувчи жонзотларни йўқ
                қилиш. .
              </p>
            </div>
          </div>

          <div className="service-card">
            <img src={cardImg} alt="" width={300} height={300} />
            <div className="service-wrapper">
              <h3 className="service-wrapper-title">
                Дератизатсия - кемирувчиларни йўқ қилиш.
              </h3>
              <p className="service-wrapper-text">
                Тошкентда дератизатсия кемирувчиларни йўқ қилишга қаратилган
                комплекс чора-тадбирларнинг бутун мажмуасидир. Маълумки,
                кемирувчилар жуда қаттиқ жонзотлар бўлиб, улар турли хил хавфли
                таъсирларга дош берадилар. Шунинг учун уларни йўқ қилиш учун бир
                қатор усуллардан фойдаланиш керак. Дератизатсия Тошкент шаҳрида
                кемирувчилар пайдо боʻлган жойларда: коʻп қаватли уйлар,
                омборлар, доʻконлар, умумий овқатланиш корхоналари амалга
                оширилади.
              </p>
            </div>
          </div>
        </div>

        <div className="service-box">
          <h2 className="service-box-title">Xizmat turi</h2>
          <ul className="service-ul">
            <li className="service-list">
              <h3 className="service-card-title">klapalar</h3>
              <p className="service-card-text">
                Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва
                дераза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли
                ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик
                ноқулайликни қўзғатинг...
              </p>
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
              <h3 className="service-card-title">tarakanlar</h3>
              <p className="service-card-text">
                Улар патогенларни олиб юрадилар. Улар ёриқларда, таглик тагида,
                мебел орқасида, ҳаммом остида, шкафлар остида ва ҳоказоларда
                яшайдилар. Улар озиқ-овқат, маиший чиқиндилар, чарм буюмлар ва
                қоғоз билан озиқланадилар.
              </p>
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
              <h3 className="service-card-title">chayon</h3>
              <p className="service-card-text">
                Ҳашаротлар ва арахнидлар билан озиқланадиган иссиқликни яхши
                кўрадиган жонзотлар. Улар омборларда ва уйларда яшашлари мумкин,
                лекин кўпинча улар ёғоч биноларда топилади ...
              </p>
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
              <h3 className="service-card-title">
                kemiruvchi <br />
                lar
              </h3>
              <p className="service-card-text">
                Енг кенг тарқалган каламушлар ва сичқонлар. Улар патогенларни
                олиб юради, барча сиртларда ишлайди, девор ва шифтларда ўтиш
                жойларини яратади, структуранинг ишончлилигини пасайтиради. Улар
                озиқ-овқат ва маиший чиқиндилар билан озиқланади...
              </p>
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
              <h3 className="service-card-title">burgalar</h3>
              <p className="service-card-text">
                Улар уй ҳайвонлари танасига кириб, қўшнилардан кўчиб кетишади.
                Улар юмшоқ мебеллар, кўрпа-тўшаклар, гиламлар, юмшоқ ўйинчоқлар,
                таглик тагида ва дераза ва ешик ромларида яшайдилар. Улар
                одамлар ва ҳайвонларнинг қони билан озиқланади. Улар
                касалликларга олиб келади ...
              </p>
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
          </ul>
        </div>

        <div className="service-content">
          <img className="service-picture" src={cardpht} alt="" />
          <div className="service-content-div">
            <div className="service-flex">
              <AiFillCheckCircle className="service-content-icon" />
              <h3 className="service-content-text">
                Расмий кафолат - 1 йил. Биз жизмоний ва юридик шахсларга хизмат
                курсатамиз. Хизматлар лиц ен -<br />
                зиялан ган!!!
              </h3>
              <a href="#footer">
                {" "}
                <button className="btn">Bog’lanish</button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "uz",
    resources: {
      uz: {
        translation: {
          home: "Asosiy",
          about: "Biz xaqimizda",
          xaq: "Xaqida",
          service: "Xizmatlar",
          faq: "Faq",
          contact: "Bog’lanish",
          dez: "Dezinfeksiya xizmati ",
          p: "Biz Toshkentda 10 yildan beri professional dizenfeksiya ishlarni  olib boramiz, shuning uchun birinchi marta zararkunandalardanqanday qutulishni bilamiz.",
          tez: "Tezda xizmat ko’rsatish",
          yet: "Yetuk mutahasislaimiz",
          maq: "Sizga maqul vaqtda",
          text: "ARIZALAR KUNIGA 24 SOAT KABUL KILINADI. AGAR MUAMMO SHOSHILINCH BOLSA, BIZ DARGOL KETISHIMIZ MUMKIN. SHU BILAN BIRGA, SIFAT MUKAMMAL BOLIB KOLADI.",
          text2:
            "BIZNES XODIMLARIMIZ GAMA NARSAGA GAMHORLIK KILADI: HISOB-KITOBLAR, KHONANI TAYORLASH, KAYTA ISHLASH, YAKUNIY TOZALASH, VENTILATSIYA VA NAZORAT TEXIRUVI.",
          text3:
            "SIZ OZINGIZ UCHUN MAKUL VA KULAY VAKTNI TALANG VA BIZGA MURODZHAT KILING. SIZGA KAFOLATLANGAN VA SAMARALI NATIZHANI OLIB BORAMIZ",
          zar: "Klapa va zararli hashorot endi yo’q deb hisoblang !!!",
          oo: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
          f: "Biz sizga samarali va kafolatli xizmat taqdim etamiz.",
          title: "Dezinfektsiya - zararli mikroorganizmlarni yo'q qilish",
          word: "Har qanday dezinfection asosy foydalanish infeksialar va olib olib kelishi mumkin bulgan havfli microorganism ywk qilishdir. Dezinfection to'lg'azish bush zhoyni mogor, virus, chiriyotgan va bakteriumardan tozalaidi. Fried atrophy-muchitis patogen organizmlardan tozalaidi.Agar o'zingizni emon his qilsangiz, charchok yoki sababsiz zaiflashsangiz kerak.",
          title2: "Desineksatsiya - xasharotlarni yo'q qilish",
          word2:
            "Ko'p odamlar birinchi navbatdagi 'disinfestatsiya' swzini istalmagan qushnilaridan - choishablar, hamambösekler, chumolilar va boshka khasharotlardan halos bwlish yolini qidirganda duch kelishadi. Ularning o'zlari o'qimsiz va ular xam malum infektsiya tashuvchilari. Desinexia - bu hasharotlarni: chivinlar, chivinlar, choyshablar, cockroach, kuya, shomil, qobik qo'ng'izlari, yog'och bitlari va boshka sudralib yuruvchi va uchuvchi zhonzotlarni o'tkazish. .",
          title3: "Deratizatsiya - kemiruvchilarni yo'q qilish.",
          word3:
            "Toshkentda deratizatsiya kemiruvchilarni yo'q nazorati ostidagi kompleks chora-tadbirlarning butun mazhmuasidir. Malumki, kemiruvchilar zhuda qattik zhonzotlar bwlib, ular turli xil khil hafli tasirlarga dosh beradilar. Buning uchun ularning y'o'k qilish uchun bir qator usullardan foidalanish kerak. Deratizatsiya Toshkent shahridagi kemiruvchilar payo boʻlgan joilarda: kop qavatli uylar, omborlar, doʻkonlar, umumiy ovqatlanish korhonalari amalga oshirish.",
          title4: "Xizmat turi",
          titles: "KLAPALAR",
          titles2: "TARAKANLAR",
          titles3: "CHAYON",
          titles4: "KEMIRUVCHILAR",

          titles5: "BURGALAR",
          text5:
            "Ular t''shakda, yumshok mebelda, t'qimachilikda, eshik romlari va kiyim romlari ostida yashaydilar. Ular odamlar va issiq qo'nli xayvonlarning qoni bilan oziklanadi. Allergiya va ogir psixolog nokulaylikni qo'zg'atmoqda...",
          text6:
            "Ular patogenlarni olib yuradilar. Ular yoriqlarda, taglik tagida, mebel orqasida, hammom ostida, shkaf ostida va hokazolarda yashaydilar. Ular oziq-ovqat, maishiy chiqindilar, charm buyumlar, qog'oz...",
          text7:
            "Hasharotlar va araxnidlar bilan oziqlanadigan issiqlikni yaxshi ko'radigan jonzotlar. Ular omborlarda va uylarda yashashlari mumkin, lekin ko'pincha ular yog'och binolarda topiladi ...",
          text8:
            "Енг кенг тарқалган каламушлар ва сичқонлар. Улар патогенларни олиб юради, барча сиртларда ишлайди, девор ва шифтларда ўтиш жойларини яратади, структуранинг ишончлилигини пасайтиради. Улар озиқ-овқат ва маиший чиқиндилар билан озиқланади...",
          text9:
            "Улар уй ҳайвонлари танасига кириб, қўшнилардан кўчиб кетишади. Улар юмшоқ мебеллар, кўрпа-тўшаклар, гиламлар, юмшоқ ўйинчоқлар, таглик тагида ва дераза ва ешик ромларида яшайдилар. Улар одамлар ва ҳайвонларнинг қони билан озиқланади. Улар касалликларга олиб келади ...",
          text10:
            "Rasmiy kafolat - 1 yil. Biz jismoniy va yuridik shaxslarga xizmat ko'rsatamiz. Xizmatlar litsenziyalangan!!!",
          faqtext: "Zararkunan dalarni yo'k qilish kanday amalga oshirish?",
          faqtext2: "  Siz foida  dori havflimi?",
          faqtext3:
            "Menga uyimni  davo lanishga tayorlash ning kandaydir usuli kerakmi?",
          wrapper:
            "     Maxsus asbob-uskunalar yordamida insektitsidlar aerozolli tumanga aylanadi va devor qog'ozi, devorlar va taxta plitalari orasidagi eng kichik bo'shliqlarga, ko'zga ko'rinmas hasharotlar uchun potentsial yashirish joylari ga kiradi.",

          wrapper2:
            "Preparatlar, uy hayvonlari va o'simliklar uchun hafli emas. Ammodan keyin khonani 40 daqiqa ventilatsiya qilish kerak.",
          wrapper3:
            "Asosan, Yiddish-tovok shakhsiy hygiene boshqarishni izolyatsiya qilish kerak. joyda uy hayvonlari ham isolation qilinishi kerak. Mebel yoki maishy uskunasi kwchirishga hozhat o'q.",
          info: "Malumotingizni qoldiring",
          name: "Ismingiz",
          yub: "Yuborish",
          location: "Uzbekiston, Toshkent shahri",
          send: "Xabaringiz jo'natildi",
        },
      },
      ru: {
        translation: {
          home: "Основной",
          about: "О нас",
          xaq: "О нас",
          service: "Услуги",
          faq: "ФАҚ",
          contact: "Связь",
          dez: "Служба дезинфекции",
          p: "Мы проводим профессиональную дезинфекцию в Ташкенте 10 лет, поэтому знаем, как избавить вас от вредителей с 1-го раза.",
          tez: "Быстрое Обслуживание",
          yet: "Наши Опытные Специалисты",
          maq: "Когда Вам Будет Удобно",
          text: "ЗАЯВКИ ПРИНИМАЮТСЯ 24 ЧАСА В СУТКИ. ЕСЛИ ПРОБЛЕМА СРОЧНАЯ, МЫ МОЖЕМ ПРИЕХАТЬ НЕМЕДЛЕННО. ОДНАКО КАЧЕСТВО ОСТАЕТ ОТЛИЧНЫМ.",
          text2:
            "НАШ ПЕРСОНАЛ ЗАНИМАЕТ ВСЕ: УЧЕТ, ПОДГОТОВКА ПОМЕЩЕНИЙ, ПЕРЕРАБОТКА, ЗАКЛЮЧИТЕЛЬНАЯ УБОРКА, ВЕНТИЛЯЦИЯ И КОНТРОЛЬНЫЕ ПРОВЕРКИ",
          text3:
            "ВЫБЕРИТЕ ПОДХОДЯЩЕЕ И УДОБНОЕ ДЛЯ ВАС ВРЕМЯ И СВЯЖИТЕСЬ С НАМИ. МЫ ДАЕМ ВАМ ГАРАНТИРОВАННЫЙ И ЭФФЕКТИВНЫЙ РЕЗУЛЬТАТ.",
          zar: "Считай клoпы и вредных насекомых больше нет!!!",
          oo: "Наша компания, работающая уже много лет, нами довольна.",
          f: "Мы обеспечиваем вам эффективное и гарантированное обслуживание.",
          title: "Дезинфекция – Уничтожить Вредоносные Микроорганизмы",
          word: "Главная задача любой дезинфекции уничтожить опасные микроорганизмы, способные вызывать инфекции и заболевания. Дезинфекционные мероприятия избавляют пространство от плесени, вирусов, грибка, бактерий. Процедура очищает среду от патогенных организмов, Если вы беспричинно чувствуете недомогание, утомление, слабость, необходимо вызвать дезинфекторов.",
          title2: "Дезинсекция – Уничтожение Насекомых",
          word2:
            "Со словом «дезинсекция» многие впервые сталкиваются, когда ищут способ избавиться от нежелательных соседей – клопов, тараканов, муравьев и других насекомых. Они сами по себе неприятны, к тому же еще известные переносчики инфекций. Дезинсекция – это уничтожение насекомых: комаров, мух, клопов, тараканов, моли, клещей, короедов, мокриц и прочих ползающих и летающих. Наравне с дератизацией, обработка производится с помощью специнструмента, к которому относятся генераторы холодного и горячего тумана, а так же профессиональных инсектицидов.",
          title3: "Дератизация — Уничтожению Грызунов.",
          word3:
            "Дератизация в Ташкенте представляет собой целый комплекс сложных мер, направленных на уничтожение грызунов. Как известно, грызуны являются довольно выносливыми существами, которые отлично справляются с различного рода опасными воздействиями. Именно поэтому, чтобы их уничтожить необходимо использовать целый ряд методов. Дератизация в Ташкенте производится везде, где появились грызуны: многоэтажных зданиях, складах, магазинах, заведениях общепита, частных домах, на приусадебных участках.",
          title4: "Тип обслуживания",
          titles: "КЛOПЫ",
          titles2: "ТAРAКАНЫ",
          titles3: "СКОРПИОН",
          titles4: "ГРЫЗУНЫ",
          titles5: "БЛОХИ",
          text5:
            "Живут в постели, мягкой мебели, текстиле, под дверными коробами и оконными рамами. Питаются кровью людей и теплокровных животных. Провоцируют аллергию и сильный психологический дискомфорт...",
          text6:
            "Переносят на себе возбудители болезней. Живут в щелях, под плинтусами, за мебелью, под ванной, под шкафами и пр. Питаются пищевыми продуктами, бытовыми отходами, кожаными изделиями, бумагой...",
          text7:
            "Теплолюбивые существа, которые питаются насекомыми и паукообразными. Могут поселиться в сарае и доме, но чаще они встречаются в деревянных строениях...",
          text8:
            "Самые распространенные — крысы и мыши. Они переносят на себе возбудители болезней, бегают по всем поверхностям, проделывают ходы в стенах и перекрытиях, снижая надежность строения. Питаются пищевыми продуктами и бытовыми отходами...",
          text9:
            "Попадают в дом на теле питомцев, мигрируют от соседей. Живут в мягкой мебели, постели, коврах, мягких игрушках, под плинтусами и рамами окон и дверей. Питаются кровью людей и животных. Переносят болезни...",
          text10:
            "Официальная гарантия - 1 год. Оказываем услуги физическим и юридическим лицам. Услуги лицензированы!!!",
          faqtext: "Чем Производится Уничтожение Вредителей?",
          faqtext2: "Опасны Ли Используемые Вами Препараты? ",
          faqtext3: "Мне Нужно Как-То Подготовить Свой Дом Для Обработки?",
          wrapper:
            "При помощи специального оборудования инсектициды превращаются в аэрозольный туман и проникают в мельчайшие зазоры между обоями, стенами и плинтусами, в невидимые глазу потенциальные «укрытия» насекомых.",
          wrapper2:
            "Для людей, домашних питомцев и растений препараты не представляют опасности. Но после обработки помещение необходимо всё же проветрить в течение 40 минут.",
          wrapper3:
            "В основном нужно изолировать посуду и средства личной гигиены. Также нужно изолировать домашних животных на время обработки. Передвигать мебель и бытовую технику не требуется.",
          info: "Оставьте свою информацию",
          name: "Ваше имя",
          yub: "Отправка",
          location: "Узбекистан, город Ташкент",
          send: "Ваше сообщение было отправлено",
        },
      },
    },
  });

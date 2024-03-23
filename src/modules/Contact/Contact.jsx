import { Container } from "../../components/Container/Container";
import contactImg from "../../assets/img/contact-a5f11f68.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./style.scss";

import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setMasage] = useState(null);
  const { t } = useTranslation();

  const token = "7183149447:AAGVUY8rHtWLmvWrUmn_KRpNZ8oyxcX8LiI";
  const chatId = 1124566830;

  const sendMessage = async (message, input1) => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: `Message: ${message}\nInput 1: ${input1}`,
          }),
        }
      );

      if (response.ok) {
        console.log("Message sent successfully");
        onOpen();
      } else {
        console.error("Failed to send message:", response.status);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    sendMessage(name, number);
    setMasage(null);
    e.target.elements.name.value = "";
    e.target.elements.number.value = "";
  };

  return (
    <section>
      <Container>
        <div className="contact-box">
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalBody>
                <Box className="chakra-box">
                  <FaRegCheckCircle className="contact-svg" />
                  <Box className="chakra-div">{t("send")}</Box>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>

          <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">{t("info")}</h2>
            <input
              className="inp"
              type="text"
              name="name"
              placeholder={t("name")}
              required
              value={name}
              onChange={(e) => setMasage(e.target.value)}
            />

            <div className="inp-box">
              <div className="inp-plus">
                +998 <span className="inp-spn"></span>
              </div>
              <input className="inp-num" type="number" name="number" required />
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

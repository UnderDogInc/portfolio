import React from "react";
import { TitleBar, Cursor } from "@react95/core";
import { Textchat } from "@react95/icons";
import * as Base from "./layoutStyling";
import { useLanguage } from "../context/LanguageContext";

function About({ closeAboutModal }) {
  const { t } = useLanguage();

  return (
    <Base.styledModal
      icon={<Textchat variant="16x16_4" />}
      title={t("about.title")}
      titleBarOptions={[
        <TitleBar.Close onClick={closeAboutModal} key="close" />,
      ]}
    >
      <Base.styledModalFrame bg="white" boxShadow="$in">
        <h1>{t("about.greeting")}</h1>
        <p>
          {t("about.description")}
          <br />
          {t("about.description2")}
        </p>
        <p>
          {t("about.questions")}{" "}
          <a
            href="https://t.me/FBCEB1"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            {t("socials.telegram")}
          </a>
        </p>
      </Base.styledModalFrame>
    </Base.styledModal>
  );
}

export default About;

import React from "react";
import { TitleBar, ProgressBar } from "@react95/core";
import { Shell3236 } from "@react95/icons";
import * as Base from "./layoutStyling";
import { useLanguage } from "../context/LanguageContext";

function Skills({ closeSkillsModal }) {
  const { t } = useLanguage();

  return (
    <Base.styledModal
      className="styledModal"
      title={t("skills.title")}
      titleBarOptions={[
        <Base.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={closeSkillsModal} key="close" />,
      ]}
      icon={<Shell3236 variant="16x16_4" />}
    >
      <Base.styledModalFrame bg="white" boxShadow="$in">
        <h1>{t("skills.heading")}</h1>
        <p>{t("skills.description")}</p>
        <hr color="gray" align="left" width="100%" />
        <h2>{t("skills.designTools")}</h2>

        <h4>{t("skills.tools.figma")}</h4>
        <ProgressBar width={250} percent={80} />
        <h4>{t("skills.tools.photoshop")}</h4>
        <ProgressBar width={250} percent={85} />

        <h4>{t("skills.tools.illustrator")}</h4>
        <ProgressBar width={250} percent={80} />

        <div style={{ margin: "8px" }} />
        <hr color="gray" align="left" width="100%" />
        <h2>{t("skills.devTools")}</h2>
        <h4>{t("skills.tools.javascript")}</h4>
        <ProgressBar width={250} percent={93} />
        <h4>{t("skills.tools.storybook")}</h4>
        <ProgressBar width={250} percent={85} />
        <h4>{t("skills.tools.html")}</h4>
        <ProgressBar width={250} percent={95} />
        <h4>{t("skills.tools.git")}</h4>
        <ProgressBar width={250} percent={90} />
        <h4>{t("skills.tools.react")}</h4>
        <ProgressBar width={250} percent={65} />
        <h4>{t("skills.tools.vue")}</h4>
        <ProgressBar width={250} percent={90} />
        <h4>{t("skills.tools.nuxt")}</h4>
        <ProgressBar width={250} percent={85} />
        <h4>{t("skills.tools.next")}</h4>
        <ProgressBar width={250} percent={60} />
        <h4>{t("skills.tools.gatsby")}</h4>
        <ProgressBar width={250} percent={70} />
        <div style={{ margin: "8px" }} />
        <hr color="gray" align="left" width="100%" />
        <h2>{t("skills.otherSkills")}</h2>
        <ul>
          <li>{t("skills.other.agile")}</li>
          <li>{t("skills.other.codeReview")}</li>
          <li>{t("skills.other.productDev")}</li>
          <li>{t("skills.other.seo")}</li>
          <li>{t("skills.other.projectManagement")}</li>
          <li>{t("skills.other.designSystems")}</li>
          <li>{t("skills.other.userInterviews")}</li>
          <li>{t("skills.other.userTesting")}</li>
          <li>{t("skills.other.base")}</li>
          <li>{t("skills.other.research")}</li>
        </ul>
      </Base.styledModalFrame>
    </Base.styledModal>
  );
}

export default Skills;

import React from "react";
import { List, Cursor, TaskBar } from "@react95/core";
import Shortcuts from "./desktopIcons";
import "./styles.scss";
import {
  Shell3236,
  Progman34,
  Textchat,
  Explorer103,
  Awfxcg321303,
} from "@react95/icons";
import Portfolio from "./portfolio";
import CV from "./cv";
import About from "./about";
import Skills from "./skills";
import useModal from "./useModal";
import { useLanguage } from "../context/LanguageContext";

function Desktop() {
  const { t, toggleLanguage } = useLanguage();
  const [showAboutModal, handleOpenAboutModal, handleCloseAboutModal] =
    useModal(true);
  const [showSkillsModal, handleOpenSkillsModal, handleCloseSkillsModal] =
    useModal(false);
  const [
    showPortfolioModal,
    handleOpenPortfolioModal,
    handleClosePortfolioModal,
  ] = useModal(false);
  const [showCVModal, handleOpenCVModal, handleCloseCVModal] = useModal(false);

  const socialMedia = [
    {
      id: 0,
      name: t("socials.telegram"),
      url: "https://t.me/FBCEB1",
    },
    {
      id: 1,
      name: t("socials.github"),
      url: "https://github.com/UnderDogInc",
    },
    {
      id: 2,
      name: t("socials.instagram"),
      url: "https://www.instagram.com/under.dog.in",
    },
  ];

  return (
    <>
      <TaskBar
        list={
          <List width={"200px"}>
            <List.Item
              className="listLink"
              icon={<Progman34 variant="32x32_4" />}
            >
              {t("menu.socials")}
              <List>
                {socialMedia.map(({ id, name, url }) => (
                  <a
                    className="listLink"
                    as="a"
                    target="_blank"
                    href={url}
                    key={id}
                    rel="noreferrer"
                  >
                    <List.Item className={`${Cursor.Pointer} listLink`}>
                      {name}
                    </List.Item>
                  </a>
                ))}
              </List>
            </List.Item>
            <List.Item
              icon={<Awfxcg321303 variant="32x32_4" />}
              onClick={handleOpenCVModal}
              className="listLink"
            >
              {t("menu.cv")}
            </List.Item>
            <List.Item
              icon={<Explorer103 variant="32x32_4" />}
              onClick={handleOpenPortfolioModal}
              className="listLink"
            >
              {t("menu.portfolio")}
            </List.Item>
            <List.Item
              icon={<Shell3236 variant="32x32_4" />}
              onClick={handleOpenSkillsModal}
              className="listLink"
            >
              {t("menu.skills")}
            </List.Item>
            <List.Divider />
            <List.Item
              icon={<Textchat variant="32x32_4" />}
              onClick={handleOpenAboutModal}
              className="listLink"
            >
              {t("menu.welcome")}
            </List.Item>
            <List.Divider />
            <List.Item onClick={toggleLanguage} className="listLink">
              {t("menu.language")}
            </List.Item>
          </List>
        }
      />

      <Shortcuts
        openPortfolio={handleOpenPortfolioModal}
        openCV={handleOpenCVModal}
      />
      {showAboutModal && <About closeAboutModal={handleCloseAboutModal} />}
      {showSkillsModal && <Skills closeSkillsModal={handleCloseSkillsModal} />}
      {showPortfolioModal && (
        <Portfolio closePortfolio={handleClosePortfolioModal} />
      )}
      {showCVModal && <CV closeCV={handleCloseCVModal} />}
    </>
  );
}

export default Desktop;

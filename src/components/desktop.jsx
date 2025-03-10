import React from "react";
import { List, Cursor, TaskBar } from "@react95/core";
import Shortcuts from "./desktopIcons";
import "./styles.scss";
import { Shell3236, Progman34, Textchat, Explorer103, Awfxcg321303 } from "@react95/icons";
import Portfolio from "./portfolio";
import CV from "./cv";
import About from "./about";
import Skills from "./skills";
import useModal from "./useModal";

function Desktop() {
  const [showAboutModal, handleOpenAboutModal, handleCloseAboutModal] = useModal(true);
  const [showSkillsModal, handleOpenSkillsModal, handleCloseSkillsModal] = useModal(false);
  const [showPortfolioModal, handleOpenPortfolioModal, handleClosePortfolioModal] = useModal(false);
  const [showCVModal, handleOpenCVModal, handleCloseCVModal] = useModal(false);

  const socialMedia = [
    {
      id: 0,
      name: "Telegram",
      url: "https://t.me/FBCEB1",
    },
    {
      id: 1,
      name: "Github",
      url: "https://github.com/UnderDogInc",
    },
    {
      id: 2,
      name: "Instagram",
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
              Socials
              <List>
                {socialMedia.map(({ id, name, url }) => (
                  <a
                    className="listLink"
                    as="a"
                    target="_blank"
                    href={url}
                    key={id}
                  >
                    <List.Item className={`${Cursor.Pointer} listLink`}>{name}</List.Item>
                  </a>
                ))}
              </List>
            </List.Item>
            <List.Item
              icon={<Awfxcg321303 variant="32x32_4" />}
              onClick={handleOpenCVModal}
              className="listLink"
            >
              CV{" "}
            </List.Item>
            <List.Item
              icon={<Explorer103 variant="32x32_4" />}
              onClick={handleOpenPortfolioModal}
              className="listLink"
            >
              Portfolio{" "}
            </List.Item>
            <List.Item
              icon={<Shell3236 variant="32x32_4" />}
              onClick={handleOpenSkillsModal}
              className="listLink"
            >
              Skills
            </List.Item>
            <List.Divider />
            <List.Item
              icon={<Textchat variant="32x32_4" />}
              onClick={handleOpenAboutModal}
              className="listLink"
            >
              Welcome
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
      {showPortfolioModal && <Portfolio closePortfolio={handleClosePortfolioModal} />}
      {showCVModal && <CV closeCV={handleCloseCVModal} />}
    </>
  );
}

export default Desktop;

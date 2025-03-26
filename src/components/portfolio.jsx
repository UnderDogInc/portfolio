import React from "react";
import { TitleBar, Cursor } from "@react95/core";
import { Explorer103 } from "@react95/icons";
import * as Base from "./layoutStyling";
import { useLanguage } from "../context/LanguageContext";

function Portfolio({ closePortfolio }) {
  const { t } = useLanguage();

  return (
    <Base.styledModal
      title={t("portfolio.title")}
      titleBarOptions={[
        <Base.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={closePortfolio} key="close" />,
      ]}
      height="100%"
      icon={<Explorer103 variant="16x16_4" />}
    >
      <Base.styledModalFrame bg="white" boxShadow="$in">
        <h1>{t("portfolio.heading")}</h1>
        <p>{t("portfolio.description")}</p>
        <hr color="gray" align="left" width="100%" />
        <h2>{t("portfolio.projects.meetMarket.title")}</h2>
        <h3>{t("portfolio.role")}</h3>
        <span className="stack">
          {t("portfolio.stack")} {t("portfolio.projects.meetMarket.stack")}
        </span>
        <h4>{t("portfolio.background")}</h4>
        <p>{t("portfolio.projects.meetMarket.background")}</p>
        <h4>{t("portfolio.solution")}</h4>
        <p>{t("portfolio.projects.meetMarket.solution")}</p>
        <a
          className={Cursor.Pointer}
          href="https://meet-market.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("portfolio.visitSite")}
        </a>{" "}
        <hr color="gray" align="left" width="100%" />
        <h2>{t("portfolio.projects.taxiO2.title")}</h2>
        <h3>{t("portfolio.role")}</h3>
        <span className="stack">
          {t("portfolio.stack")} {t("portfolio.projects.taxiO2.stack")}
        </span>
        <h4>{t("portfolio.background")}</h4>
        <p>{t("portfolio.projects.taxiO2.background")}</p>
        <h4>{t("portfolio.solution")}</h4>
        <p>{t("portfolio.projects.taxiO2.solution")}</p>
        <a
          className={Cursor.Pointer}
          href="https://play.google.com/store/apps/details?id=com.taxio2.app.taxi_o2&hl=ru&gl=US&pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("portfolio.visitSite")}
        </a>{" "}
        <hr color="gray" align="left" width="100%" />
        <h2>{t("portfolio.projects.cafebotum.title")}</h2>
        <h3>{t("portfolio.role")}</h3>
        <span className="stack">{t("portfolio.projects.cafebotum.stack")}</span>
        <h4>{t("portfolio.background")}</h4>
        <p>{t("portfolio.projects.cafebotum.background")}</p>
        <h4>{t("portfolio.solution")}</h4>
        <p>{t("portfolio.projects.cafebotum.solution")}</p>
        <a
          className={Cursor.Pointer}
          href="https://cafebotum.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("portfolio.visitSite")}
        </a>{" "}
        <hr color="gray" align="left" width="100%" />
        <h2>{t("portfolio.projects.iilab.title")}</h2>
        <h3>{t("portfolio.role")}</h3>
        <span className="stack">{t("portfolio.projects.iilab.stack")}</span>
        <h4>{t("portfolio.background")}</h4>
        <p>{t("portfolio.projects.iilab.background")}</p>
        <h4>{t("portfolio.solution")}</h4>
        <p>{t("portfolio.projects.iilab.solution")}</p>
        <a
          className={Cursor.Pointer}
          href="https://iilab.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("portfolio.visitSite")}
        </a>{" "}
      </Base.styledModalFrame>
    </Base.styledModal>
  );
}

export default Portfolio;

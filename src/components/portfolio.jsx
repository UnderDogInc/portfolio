import React from "react";
import {TitleBar, Cursor} from "@react95/core";
import { Explorer103 } from "@react95/icons";
import * as Base from "./layoutStyling";

function Portfolio({ closePortfolio }) {
  return (
    <Base.styledModal
      title="Portfolio.txt"
      titleBarOptions={[
        <Base.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={closePortfolio} key="close" />,
      ]}
      height="100%"
      icon={<Explorer103 variant="16x16_4" />}
    >
      <Base.styledModalFrame bg="white" boxShadow="$in">
        <h1>Short Portfolio</h1>
        <p>
          This is a shortened, non-visual version of my portfolio without
          detailed information on the projects I have been working on. If you
          are interested in seeing any of the work I have done in more detail,
          please contact me for a call and I'll present the learnings in more
          detail.
        </p>
        <hr color="gray" align="left" width="100%"/>
        <h2>Meet Market</h2>
        <h3>Role: Front-end developer</h3>
        <span className="stack">
          Stack: Vue.Js 2/3, Nuxt.Js 2/3, Vuetify 2, Vuex, TypeScript, Storybook, Pinia
        </span>

        <h4>Background</h4>
        <p>
          Meet Market is an online store specializing in branded footwear, clothing, and accessories, delivering across
          Russia and the CIS.
          The company handles logistics, document processing, currency conversion, and product authenticity
          verification, ensuring customers receive high-quality items with confidence.
        </p>
        <h4>Solution</h4>
        <p>
          In my role at Meet Market, I implemented responsive and cross-browser development techniques that
          significantly improved the user experience.
          This resulted in a 20% increase in application speed and a 3x reduction in package size.
          I developed a single-page application and backend dashboard that contributed to our top 5 rankings for key
          search queries. Additionally,
          I created a custom UI library and worked closely with backend developers and designers to ensure a smooth
          project delivery.
          My responsibilities included manual testing, interface redesigns, and email templates,
          which significantly improved the quality of customer communication.
          Additionally, my active participation in conferences and my ability to solve technical
          problems such as setting up development servers demonstrate my commitment to continuous
          learning and professional growth.
        </p>
        <a
          className={Cursor.Pointer}
          href="https://meet-market.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site
        </a>{" "}
        <hr color="gray" align="left" width="100%"/>
        <h2>Taxi O₂</h2>
        <h3>Role: Front-end developer</h3>
        <span className="stack">
          Stack: Vue.Js, Bootstrap, Pinia
        </span>

        <h4>Background</h4>
        <p>
          It's startup focuses on a taxi ordering app that empowers drivers to set their own price per kilometer,
          fostering a competitive and flexible pricing model. Passengers can browse profiles,
          ratings, and prices of available drivers,
          allowing them to select their preferred driver for a personalized and satisfying ride experience.
        </p>
        <h4>Solution</h4>
        <p>
          In my role as the sole frontend developer at the startup, I was responsible for developing the entire frontend
          of the taxi ordering application,
          focusing on implementing the core logic that allowed drivers to set their own pricing per kilometer and
          passengers to select their preferred drivers.
          I collaborated closely with backend developers to integrate APIs, ensuring seamless communication between the
          frontend and backend systems.
          We implemented features that enhanced user experience, such as real-time updates on driver availability and
          ride tracking.
        </p>
        <a
          className={Cursor.Pointer}
          href="https://play.google.com/store/apps/details?id=com.taxio2.app.taxi_o2&hl=ru&gl=US&pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site
        </a>{" "}
        <hr color="gray" align="left" width="100%"/>
        <h2>Cafebotum</h2>
        <h3>Role: Front-end developer</h3>
        <span className="stack">Stack: React.Js, Gatsby.Js, Next.Js, Typescript, Bootstrap, CSS modules</span>
        <h4>Background</h4>
        <p>
          <strong>The Cafebotum</strong> - application on Telegram, a cloud-based platform designed to digitize
          establishments.
          The application enables users to create a fully functional web app in just 7 minutes,
          featuring an online menu, order management, loyalty system, online payment, and delivery options.
        </p>
        <h4>Solution</h4>
        <p>
          I was responsible for creating responsive, cross-browser, and semantic markup for various projects. I
          developed a landing page using Gatsby,
          ensuring optimal performance and user experience. Collaborating closely with backend developer and we create
          awesome design,
          also integrated features that enhanced the overall functionality of the application.
          Created new functionality for the admin panel, which played a significant role in attracting new users to the
          platform.
          Also worked on creating a Telegram Mini App,
          expanding our reach and engagement with users on popular messaging platforms.
          My efforts also focused on optimizing the application for SEO, resulting in improved visibility and traffic to
          our site.
          Overall, its a little startup with a biggest ambitions.
        </p>
        <a
          className={Cursor.Pointer}
          href="https://cafebotum.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site
        </a>{" "}
        <hr color="gray" align="left" width="100%"/>
        <h2>iilab</h2>
        <h3>Role: Front-end developer</h3>
        <span className="stack">Stack: TypeScript, Vue.Js, Nuxt.Js + SCSS + Pinia + Storybook</span>
        <h4>Background</h4>
        <p>
          Its a product IT company founded in May 2020,
          specializing in the development of websites and mobile applications for iOS and Android,
          as well as business process optimization and IT solution integration.
          Our main client is RC Group, for which we serve as the technical directorate and undertake outsourcing
          projects.
          Since our inception, we have grown from 20 to over 150 employees and expanded our office to 4,000 square
          meters,
          offering a wide range of high-load IT solutions.
        </p>
        <h4>Solution</h4>
        <p>
          I have significantly contributed to various projects that enhanced our team's efficiency and product quality.
          I developed a UI library that improved consistency across applications and led the complete redesign
          of the company website, optimizing user experience and performance.
          Implemented Nuxt to streamline server-side rendering and worked on both the admin panel
          and client-side features of a marketplace platform, enhancing user interaction. Additionally,
          I conducted technical interviews to assess candidates, mentored junior developers,
          and performed code reviews to uphold high standards of code quality.
          These experiences have strengthened my development and project management skills while contributing
          to the success of our projects.
        </p>
        <a
          className={Cursor.Pointer}
          href="https://iilab.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site
        </a>{" "}
      </Base.styledModalFrame>
    </Base.styledModal>
  );
}

export default Portfolio;

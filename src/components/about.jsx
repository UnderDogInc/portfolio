import React from "react";
import { TitleBar, Cursor } from "@react95/core";
import { Textchat } from "@react95/icons";
import * as Base from "./layoutStyling";

function About({ closeAboutModal }) {
  return (
    <Base.styledModal
      icon={<Textchat variant="16x16_4" />}
      title={"Welcome.txt"}
      titleBarOptions={[
        <TitleBar.Close onClick={closeAboutModal} key="close" />,
      ]}
    >
      <Base.styledModalFrame bg="white" boxShadow="$in">
        <h1>Hello!</h1>
        <p>
          Hey! I&rsquo;m Danila, your go-to front-end dev.
          Think of&nbsp;me&nbsp;as&nbsp;a&nbsp;coding rockstar, a&nbsp;bug-slaying hawk, and an&nbsp;all-around awesome dev who&rsquo;s all about delivering top-notch solutions. I&rsquo;ve dived into product development across a&nbsp;bunch of&nbsp;fields&mdash;whether I&rsquo;m rolling as&nbsp;an&nbsp;in-house guru or&nbsp;freelancing for startups, I&rsquo;ve got the chops to&nbsp;make it&nbsp;happen.
          <br/>
          I&rsquo;m all about writing clean, structured code that&rsquo;s easy to&nbsp;read and maintain. I&nbsp;love getting my&nbsp;hands dirty with interface development, whipping up&nbsp;stunning animations, and crafting custom components that make users go&nbsp;&laquo;wow!&raquo; Let&rsquo;s create something amazing together!
        </p>
        <p>
          have any questions? My {' '}
          <a
            href="https://t.me/FBCEB1"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            telegram
          </a>
        </p>
      </Base.styledModalFrame>
    </Base.styledModal>
  );
}

export default About;

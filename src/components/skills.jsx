import React from "react";
import { TitleBar, ProgressBar } from "@react95/core";
import { Shell3236 } from "@react95/icons";
import * as Base from "./layoutStyling";

function Skills({ closeSkillsModal }) {
  return (
    <Base.styledModal
      className="styledModal"
      title={"Skills.txt"}
      titleBarOptions={[
        <Base.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={closeSkillsModal} key="close" />,
      ]}
      icon={<Shell3236 variant="16x16_4" />}
    >
      <Base.styledModalFrame bg="white" boxShadow="$in">
        <h1>My skills</h1>
        <p>
          I descibe myself as a generalist. I have come across a multiple
          different tasks and duties and learned a whole bunch of different
          areas in the design industry. However, I disagree with quantifying
          skills as numbers; percentages, units etc. - are skills really
          something people can measure? However, here is a rough estimate of
          some of my skills, in progress bar style.
        </p>
        <hr color="gray" align="left" width="100%"/>
        <h2>Design tools</h2>

        <h4>Figma</h4>
        <ProgressBar width={250} percent={80}/>
        <h4>Adobe Photoshop</h4>
        <ProgressBar width={250} percent={85}/>

        <h4>Adobe Illustrator</h4>
        <ProgressBar width={250} percent={80}/>

        <div style={{margin: "8px"}}/>
        <hr color="gray" align="left" width="100%"/>
        <h2>Dev tools</h2>
        <h4>JavaScript/TypeScript</h4>
        <ProgressBar width={250} percent={93}/>
        <h4>Storybook</h4>
        <ProgressBar width={250} percent={85}/>
        <h4>HTML, CSS, SASS</h4>
        <ProgressBar width={250} percent={95}/>
        <h4>Git</h4>
        <ProgressBar width={250} percent={90}/>
        <h4>React</h4>
        <ProgressBar width={250} percent={65}/>
        <h4>Vue</h4>
        <ProgressBar width={250} percent={90}/>
        <h4>Nuxt.Js</h4>
        <ProgressBar width={250} percent={85}/>
        <h4>Next.Js</h4>
        <ProgressBar width={250} percent={60}/>
        <h4>Gatsby.Js</h4>
        <ProgressBar width={250} percent={70}/>
        <div style={{margin: "8px"}}/>
        <hr color="gray" align="left" width="100%"/>
        <h2>Other Skills</h2>
        <ul>
          <li>Agile methods</li>
          <li>Code review</li>
          <li>Product development</li>
          <li>SEO optimization</li>
          <li>Project management</li>
          <li>Design systems</li>
          <li>User interviews</li>
          <li>User testing</li>
          <li>Base and prototyping</li>
          <li>Research</li>
        </ul>
      </Base.styledModalFrame>
    </Base.styledModal>
  );
}

export default Skills;

import React from "react";
import { TitleBar } from "@react95/core";
import { Shell32133 } from "@react95/icons";
import * as Base from "./layoutStyling";

function CV({ closeCV }) {
  return (
    <Base.styledModal
      icon={<Shell32133 variant="16x16_4" />}
      title={"CV.txt"}
      titleBarOptions={[
        <Base.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={closeCV} key="close" />,
      ]}
      height="100%"
    >
      <Base.styledModalFrame bg="white" boxShadow="$in">
        <h1>Curriculum Vitae</h1>
        <p>
          i hope i add CV
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Maybe my skills</h2>
        <h3>Or my position</h3>
      </Base.styledModalFrame>
    </Base.styledModal>
  );
}

export default CV;

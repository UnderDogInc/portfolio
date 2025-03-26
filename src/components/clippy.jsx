import React, { useState, useEffect } from "react";
import { useClippy } from "@react95/clippy";
import { Cursor } from "@react95/core";
import { useLanguage } from "../context/LanguageContext";

const Clippy = () => {
  const { clippy } = useClippy();
  const [agent, setAgent] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (clippy) {
      setAgent(clippy);
      clippy.show();
    }
  }, [clippy]);

  useEffect(() => {
    if (agent) {
      const interval = setInterval(() => {
        const greetings = t("clippy.greetings");
        const randomTalk =
          greetings[Math.floor(Math.random() * greetings.length)];
        agent.speak(randomTalk);
        agent.animate();
        agent.play("Wave");
      }, 100000);

      return () => clearInterval(interval);
    }
  }, [agent, t]);

  return <div className={Cursor.Pointer} />;
};

export default Clippy;

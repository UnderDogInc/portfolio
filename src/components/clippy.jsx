import React, { useState, useEffect } from "react";
import { useClippy } from "@react95/clippy";
import { Cursor } from "@react95/core";

const talks = [
  "Sup! Let's get to know each other better.",
  "Wuff wuff! Or Гав Гав in Russian!",
  "psst... Cafebotum it's best app in the world.",
];

const Clippy = () => {
  const { clippy } = useClippy();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    if (clippy) {
      setAgent(clippy);
      clippy.show();
    }
  }, [clippy]);

  useEffect(() => {
    if (agent) {
      const interval = setInterval(() => {
        const randomTalk = talks[Math.floor(Math.random() * talks.length)];
        agent.speak(randomTalk);
        agent.animate();
        agent.play("Wave");
      }, 100000);

      return () => clearInterval(interval);
    }
  }, [agent]);

  return <div className={Cursor.Pointer} />;
};

export default Clippy;

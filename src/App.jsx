import Desktop from "./components/desktop";
import "@react95/core/GlobalStyle";
import "@react95/core/themes/storm.css";
import { ClippyProvider } from "@react95/clippy";
import { Cursor } from "@react95/core";
import Clippy from "./components/clippy";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <ClippyProvider agentName="Rover">
        <Clippy />
        <Desktop className={Cursor.Auto} />
      </ClippyProvider>
    </LanguageProvider>
  );
};

export default App;

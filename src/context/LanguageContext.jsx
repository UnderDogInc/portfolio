import React, { createContext, useState, useContext, useEffect } from "react";
import { translations, defaultLanguage } from "../translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    const primaryLang = browserLang.split("-")[0].toLowerCase();

    if (translations[primaryLang]) {
      setCurrentLanguage(primaryLang);
    }
  }, []);

  const toggleLanguage = () => {
    setCurrentLanguage((prev) => (prev === "en" ? "ru" : "en"));
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLanguage];

    for (const k of keys) {
      value = value[k];
      if (!value) return key;
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

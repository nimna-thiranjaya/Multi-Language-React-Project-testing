import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Testcomponent from "./Testcomponent";

const languages = [
  { value: "", text: "Options" },
  { value: "en ", text: "English" },
  { value: "si", text: "සිංහල" },
  { value: "ta", text: "தமிழ்" },
];

export const Myself = () => {
  const [lang, setLang] = useState("en");
  const { t } = useTranslation();

  console.log(t("statement_01"));
  let loc = "http://localhost:3000/";

  const handleChange = (e) => {
    setLang(e);
    window.location.replace(loc + "?lng=" + e);
  };

  return (
    <div className="App">
      <select value={lang} onChange={(e) => handleChange(e.target.value)}>
        {languages.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
      <h1>{t("statement_01")}</h1>
      <h1>{t("statement_02")}</h1>
      <h1>{t("statement_03")}</h1>

      <Testcomponent translateArray={t} />
    </div>
  );
};

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "si", text: "සිංහල" },
  { value: "ta", text: "தமிழ்" },
];

export const Myself = () => {
  const [lang, setLang] = useState(" ");
  const { t } = useTranslation();

  let loc = "http://localhost:3000/";

  const handleChange = (e) => {
    setLang(e.target.value);
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  return (
    <div className="App">
      <select value={lang} onChange={handleChange}>
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
    </div>
  );
};
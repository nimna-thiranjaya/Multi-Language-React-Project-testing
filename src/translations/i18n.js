import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_SI } from "./si/translations";
import { TRANSLATIONS_TA } from "./ta/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      si: {
        translation: TRANSLATIONS_SI,
      },
      ta: {
        translation: TRANSLATIONS_TA,
      },
    },
  });

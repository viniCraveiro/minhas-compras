import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./pt.json";
import en from "./en.json";

export function setupI18n(defaultLanguage: string) {
    i18n.use(initReactI18next).init({
        resources: {
            pt: { translation: pt },
            en: { translation: en }
        },
        lng: defaultLanguage,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

    return i18n;
}

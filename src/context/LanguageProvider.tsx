import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import React, { createContext, useContext, useState } from "react";
import { initReactI18next } from "react-i18next";

import en from "../config/i18n/en.json";
import pt from "../config/i18n/pt.json";

const LANG_KEY = "app_language";

type LanguageContextType = {
    language: string;
    changeLanguage: (lang: string) => Promise<void>;
};

export const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    changeLanguage: async () => { }
});

// ✅ i18n inicializado aqui, uma vez só
let initialized = false;

function initI18n(defaultLanguage: string) {
    if (initialized) return; // evita reinicializar
    initialized = true;

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
}

export function LanguageProvider({ children }: { children: React.ReactNode; }) {
    const deviceLang = Localization.getLocales()[0]?.languageCode ?? "en";
    const [language, setLanguage] = useState(deviceLang);

    // 🔥 Inicializa i18n aqui, direto no fluxo de renderização (antes do React Navigation)
    initI18n(language);

    const changeLanguage = async (newLang: string) => {
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        await AsyncStorage.setItem(LANG_KEY, newLang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguageContext = () => useContext(LanguageContext);

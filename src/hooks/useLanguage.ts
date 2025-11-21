import { useLanguageContext } from "../context/LanguageProvider";

export function useLanguage() {
    const { language, changeLanguage } = useLanguageContext();

    return {
        language,
        changeLanguage
    };
}

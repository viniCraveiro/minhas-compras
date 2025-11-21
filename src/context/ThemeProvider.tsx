import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const THEME_KEY = "app_theme";

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { }
});

export function ThemeProvider({ children }: { children: React.ReactNode; }) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        (async () => {
            const saved = await AsyncStorage.getItem(THEME_KEY);
            if (saved === "light" || saved === "dark") {
                setTheme(saved);
            }
        })();
    }, []);

    const toggleTheme = async () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        await AsyncStorage.setItem(THEME_KEY, newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext);

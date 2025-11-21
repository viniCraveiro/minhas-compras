import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";

export default function SettingsScreen() {
    const { t } = useTranslation();
    const { language, changeLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <SafeAreaView
            style={tw`flex-1 p-6 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                }`}
        >
            <Text
                style={tw`text-3xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
            >
                ⚙️ {t("settings.title", "Configurações")}
            </Text>

            {/* Seleção de idioma */}
            <View style={tw`mb-8`}>
                <Text
                    style={tw`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                >
                    🌍 {t("settings.language", "Idioma")}
                </Text>

                <Pressable
                    style={tw`bg-blue-600 py-3 rounded-lg mb-2`}
                    onPress={() => changeLanguage("pt")}
                >
                    <Text style={tw`text-center text-white text-lg`}>Português</Text>
                </Pressable>

                <Pressable
                    style={tw`bg-green-600 py-3 rounded-lg`}
                    onPress={() => changeLanguage("en")}
                >
                    <Text style={tw`text-center text-white text-lg`}>English</Text>
                </Pressable>
            </View>

            {/* Tema */}
            <View style={tw`mb-8`}>
                <Text
                    style={tw`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                >
                    🎨 {t("settings.theme", "Tema")}
                </Text>

                <Pressable
                    style={tw`bg-purple-600 py-3 rounded-lg`}
                    onPress={toggleTheme}
                >
                    <Text style={tw`text-center text-white text-lg`}>
                        {theme === "light" ? "Modo Escuro" : "Modo Claro"}
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

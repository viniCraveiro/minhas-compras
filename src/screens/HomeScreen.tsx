import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { useLanguage } from "../hooks/useLanguage";
import { RootStackParamList } from "../types/Navigation";


type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: Props) {
    const { t } = useTranslation();
    const { language, changeLanguage } = useLanguage();


    return (
        <View style={tw`flex-1 items-center justify-center p-6 bg-gray-100`}>
            <Text style={tw`text-2xl font-bold text-gray-800 mb-8`}>
                {t("home.title")}
            </Text>

            <Pressable
                style={tw`w-full bg-blue-600 py-4 rounded-lg mb-4`}
                onPress={() => navigation.navigate("ProductList")}
            >
                <Text style={tw`text-center text-white text-lg`}>{t("home.products")}</Text>
            </Pressable>

            <Pressable
                style={tw`w-full bg-green-600 py-4 rounded-lg`}
                onPress={() => navigation.navigate("ChartDashboard")}
            >
                <Text style={tw`text-center text-white text-lg`}>{t("home.dashboard")}</Text>
            </Pressable>
            <Pressable
                style={tw`w-full bg-gray-700 py-4 rounded-lg mt-4`}
                onPress={() => navigation.navigate("Settings")}
            >
                <Text style={tw`text-center text-white text-lg`}>{t("home.settings", "Configurações")}</Text>
            </Pressable>

        </View>
    );
}

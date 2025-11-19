import { Pressable, Text, View } from "react-native";
import tw from "twrnc";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/Navigation";


type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={tw`flex-1 items-center justify-center p-6 bg-gray-100`}>
            <Text style={tw`text-2xl font-bold text-gray-800 mb-8`}>
                My Shopping App
            </Text>

            <Pressable
                style={tw`w-full bg-blue-600 py-4 rounded-lg mb-4`}
                onPress={() => navigation.navigate("ProductList")}
            >
                <Text style={tw`text-center text-white text-lg`}>Products</Text>
            </Pressable>

            <Pressable
                style={tw`w-full bg-green-600 py-4 rounded-lg`}
                onPress={() => navigation.navigate("ChartDashboard")}
            >
                <Text style={tw`text-center text-white text-lg`}>Dashboard</Text>
            </Pressable>
        </View>
    );
}

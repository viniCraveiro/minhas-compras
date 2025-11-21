
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChartDashboardScreen from "../screens/dashboard/DashboardScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductFormScreen from "../screens/products/ProductFormScreen";
import ProductListScreen from "../screens/products/ProductListScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import { RootStackParamList } from "../types/Navigation";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">

            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: "Configurações" }}
            />

            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Inicio" }}
            />

            <Stack.Screen
                name="ProductList"
                component={ProductListScreen}
                options={{ title: "Produtos" }}
            />

            <Stack.Screen
                name="ProductForm"
                component={ProductFormScreen}
                options={{ title: "Novo Produto" }}
            />

            <Stack.Screen
                name="ChartDashboard"
                component={ChartDashboardScreen}
                options={{ title: "Dashboard" }}
            />

        </Stack.Navigator>
    );
}

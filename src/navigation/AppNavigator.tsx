import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import ProductFormScreen from "../screens/products/ProductFormScreen";
import ProductListScreen from "../screens/products/ProductListScreen";
import { RootStackParamList } from "../types/Navigation";
import ChartDashboardScreen from "../screens/dashboard/DashboardScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Home" }}
                />

                <Stack.Screen
                    name="ProductList"
                    component={ProductListScreen}
                    options={{ title: "Products" }}
                />

                <Stack.Screen
                    name="ProductForm"
                    component={ProductFormScreen}
                    options={{ title: "New Product" }}
                />

                <Stack.Screen
                    name="ChartDashboard"
                    component={ChartDashboardScreen}
                    options={{ title: "Dashboard" }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

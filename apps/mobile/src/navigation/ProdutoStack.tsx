import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AddProductScreen from "@/screens/Product/AddProductScreen";
import ProductDetailScreen from "@/screens/Product/ProductDetailScreen";
import HomeScreen from "../screens/HomeScreen";

export type ProdutosStackParamList = {
  Home: undefined;
  ProductDetail: { productId: string };
  AddProduct: undefined;
};

const Stack = createStackNavigator<ProdutosStackParamList>();

export const ProdutosStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Produtos" }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: "Detalhes do Produto" }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{ title: "Novo Produto" }}
      />
    </Stack.Navigator>
  );
};

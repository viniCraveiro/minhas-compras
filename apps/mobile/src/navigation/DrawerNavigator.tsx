import { CategoriesScreen } from "@/screens/category/CategoriesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ProdutosStack } from "./ProdutoStack";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Produtos">
        <Drawer.Screen name="Produtos" component={ProdutosStack} />

        <Drawer.Screen name="Categorias" component={CategoriesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

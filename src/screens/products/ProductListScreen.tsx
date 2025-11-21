import { useEffect, useState } from "react";
import tw from "twrnc";

import { getAllProducts } from "../../services/firebase/product.service";

import type { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Product } from "../../types/Product";
import { formatCurrency } from '../../utils/currency';

type ProductListScreenProps = {
    navigation: StackNavigationProp<any>;
};

export default function ProductListScreen({ navigation }: ProductListScreenProps) {

    const [products, setProducts] = useState<Product[]>([]);

    async function loadData() {
        const data = await getAllProducts();
        setProducts(data);
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", loadData);
        return unsubscribe;
    }, [navigation]);

    return (
        <SafeAreaView style={tw`flex-1 bg-gray-100 p-4`}>
            <Pressable
                style={tw`bg-blue-600 py-3 rounded-lg mb-4`}
                onPress={() => navigation.navigate("ProductForm")}
            >
                <Text style={tw`text-center text-white text-lg`}>Adicionar produto</Text>
            </Pressable>

            <FlatList
                data={products}
                keyExtractor={(item: Product) => item.id?.toString() ?? ""}
                renderItem={({ item }: { item: Product; }) => (
                    <View style={tw`bg-white p-4 rounded-lg mb-3`}>
                        <Text style={tw`text-xl font-bold text-gray-800`}>{item.name}</Text>
                        <Text style={tw`text-gray-600`}>{formatCurrency(item.price)}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import tw from "twrnc";

import { createProduct } from "../../services/firebase/product.service";

export default function ProductFormScreen({ navigation }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    async function saveProduct() {
        await createProduct({
            name,
            price: Number(price),
            categoryId: "default",
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });

        navigation.goBack();
    }

    return (
        <View style={tw`flex-1 bg-gray-100 p-6`}>
            <Text style={tw`text-2xl font-bold text-gray-800 mb-6`}>
                New Product
            </Text>

            <TextInput
                placeholder="Product name"
                value={name}
                onChangeText={setName}
                style={tw`bg-white px-4 py-3 rounded-lg mb-4 border border-gray-300`}
            />

            <TextInput
                placeholder="Price"
                value={price}
                keyboardType="numeric"
                onChangeText={setPrice}
                style={tw`bg-white px-4 py-3 rounded-lg mb-6 border border-gray-300`}
            />

            <Pressable
                style={tw`bg-blue-600 py-3 rounded-lg`}
                onPress={saveProduct}
            >
                <Text style={tw`text-center text-white text-lg`}>Save</Text>
            </Pressable>
        </View>
    );
}

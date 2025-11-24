import { useState } from "react";
import { Alert, Pressable, Text, TextInput } from "react-native";
import tw from "twrnc";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "../../components/InputText";
import { createProduct } from "../../services/firebase/product.service";
import { RootStackParamList } from "../../types/Navigation";
import { parseCurrency } from "../../utils/currency";
import { serverTimestamp } from "firebase/firestore";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, "ProductForm">;
};

export default function ProductFormScreen({ navigation }: Props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    // Função para salvar o produto no Firestore
    async function saveProduct() {
        // Validação do nome e do preço
        if (!name.trim()) {
            Alert.alert("Erro", "O nome do produto é obrigatório.");
            return;
        }

        const numericPrice = parseCurrency(price);

        if (isNaN(numericPrice) || numericPrice <= 0) {
            Alert.alert("Erro", "O preço deve ser um valor válido.");
            return;
        }

        try {
            console.log("Salvando produto:", { name, price: numericPrice });

            // Criação do produto no Firestore
            await createProduct({
                name,
                price: numericPrice,
                categoryId: "default",
                createdAt: serverTimestamp(), // Usando o timestamp do Firebase
                updatedAt: serverTimestamp(), // Usando o timestamp do Firebase
            });

            console.log("Produto criado:", { name, price: numericPrice });

            // Navegar para a tela de lista após salvar
            navigation.navigate("ProductList");
        } catch (error) {
            console.error("Erro ao salvar o produto:", error);
            Alert.alert("Erro", "Ocorreu um erro ao salvar o produto.");
        }
    }

    return (
        <SafeAreaView style={tw`flex-1 bg-gray-100 p-6`}>
            <Text style={tw`text-2xl font-bold text-gray-800 mb-6`}>
                Novo Produto
            </Text>

            <TextInput
                placeholder="Nome do produto"
                value={name}
                onChangeText={setName}
                style={tw`bg-white px-4 py-3 rounded-lg mb-4 border border-gray-300`}
            />

            <InputText
                placeholder="Preço do produto"
                value={price}
                keyboardType="numeric"
                type="currency"
                onChangeValue={setPrice}
                style={tw`bg-white px-4 py-3 rounded-lg mb-6 border border-gray-300`}
            />

            <Pressable
                style={tw`bg-blue-600 py-3 rounded-lg`}
                onPress={saveProduct}
            >
                <Text style={tw`text-center text-white text-lg`}>Salvar</Text>
            </Pressable>
        </SafeAreaView>
    );
}

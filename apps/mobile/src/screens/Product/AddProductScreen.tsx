import { ProductService } from "@/db/client";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddProductScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [barcode, setBarcode] = useState("");
  const [local, setLocal] = useState("");
  const handleSave = async () => {
    if (!name || !price) {
      Alert.alert("Erro", "Nome e preço são obrigatórios");
      return;
    }

    try {
      await ProductService.create({
        name,
        price: parseFloat(price.replace(",", ".")),
        barcode: barcode || undefined,
        local: "",
      });
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert("Erro ao salvar", "Não foi possível salvar o produto");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nome do Produto</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Ex: Arroz 5kg"
        />

        <Text style={styles.label}>Preço (R$)</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholder="0,00"
        />

        <Text style={styles.label}>Local</Text>
        <TextInput
          style={styles.input}
          value={local}
          onChangeText={setLocal}
          placeholder="Ex: Supermercado XYZ"
        />

        <Text style={styles.label}>Código de Barras</Text>
        <TextInput
          style={styles.input}
          value={barcode}
          onChangeText={setBarcode}
          placeholder="Opcional"
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar Produto</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  form: { padding: 20 },
  label: { fontSize: 14, fontWeight: "bold", marginBottom: 5, color: "#333" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
});

export default AddProductScreen;

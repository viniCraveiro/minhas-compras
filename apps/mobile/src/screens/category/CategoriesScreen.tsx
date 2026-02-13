import { MoreVertical, Plus } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Category } from "./Category.model";
import { CategoryRepository } from "./Category.repository";
import { CategoryBottomSheet } from "./CategoryBottomSheet";

export function CategoriesScreen() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [visible, setVisible] = useState(false);

  function load() {
    setCategories(CategoryRepository.getAll());
  }

  useEffect(() => {
    // initDatabase();
    load();
  }, []);

  function handleSave(data: any) {
    CategoryRepository.create(data);
    setVisible(false);
    load();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categorias</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.left}>
              <View
                style={[styles.iconCircle, { backgroundColor: item.color }]}
              />
              <Text style={styles.name}>{item.name}</Text>
            </View>

            <TouchableOpacity>
              <MoreVertical size={20} color="#aaa" />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.fab} onPress={() => setVisible(true)}>
        <Plus size={24} color="#fff" />
      </TouchableOpacity>

      <CategoryBottomSheet
        visible={visible}
        onClose={() => setVisible(false)}
        onSave={handleSave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#222",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  name: {
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3f69f3",
    justifyContent: "center",
    alignItems: "center",
  },
});

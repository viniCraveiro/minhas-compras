import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

export function CategoryBottomSheet({ visible, onClose, onSave }: Props) {
  const [name, setName] = useState("");
  const [include, setInclude] = useState(true);

  function handleSave() {
    if (!name.trim()) return;

    onSave({
      name,
      color: "#4CAF50",
      icon: "tag",
      includeInRanking: include ? 1 : 0,
    });

    setName("");
    setInclude(true);
  }

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Nova categoria</Text>

          <TextInput
            placeholder="Categoria"
            placeholderTextColor="#777"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <View style={styles.switchRow}>
            <Switch value={include} onValueChange={setInclude} />
            <Text style={styles.switchText}>
              Considerar no Ranking categorias
            </Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancel}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.save}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  sheet: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#444",
    color: "#fff",
    paddingVertical: 10,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  switchText: {
    color: "#ccc",
    marginLeft: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 30,
    gap: 20,
  },
  cancel: { color: "#aaa" },
  save: { color: "#4DA3FF", fontWeight: "bold" },
});

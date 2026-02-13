import "react-native-gesture-handler";
import { DrawerNavigator } from "@/navigation/DrawerNavigator";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, LogBox, StyleSheet, View } from "react-native";
import { initDb } from "./src/db/client";

// Ignorar avisos de desenvolvimento que não afetam a produção
LogBox.ignoreAllLogs();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function initialize() {
      try {
        // Inicializa o banco de dados nativo
        await initDb();
      } catch (error) {
        console.error("Falha na inicialização do DB:", error);
      } finally {
        setIsReady(true);
      }
    }
    initialize();
  }, []);

  if (!isReady) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  return <DrawerNavigator />;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, LogBox, StyleSheet } from 'react-native';
import { Router } from './src/navigation/routes';
import { initDb } from './src/db/client';

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
        console.error('Falha na inicialização do DB:', error);
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

  return <Router />;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  }
});

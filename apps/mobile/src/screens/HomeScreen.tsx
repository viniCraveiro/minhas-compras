import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/routes';
import { ProductService } from '../db/client';
import { Plus, Package } from 'lucide-react-native';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const result = await ProductService.getAll();
      setProducts(result as any[]);
    } catch (err) {
      console.error('Erro ao buscar produtos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProducts();
    });
    return unsubscribe;
  }, [navigation]);

  if (loading && products.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.productItem}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
          >
            <Package size={24} color="#666" />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>R$ {Number(item.price).toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum produto cadastrado.</Text>
            <Text style={styles.emptySubtext}>Toque no + para começar.</Text>
          </View>
        }
      />
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('AddProduct')}
      >
        <Plus color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  productItem: { 
    flexDirection: 'row', 
    padding: 15, 
    backgroundColor: 'white', 
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center' 
  },
  productInfo: { marginLeft: 15 },
  productName: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { color: '#2ecc71', marginTop: 4 },
  emptyContainer: { padding: 50, alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#999', fontWeight: 'bold' },
  emptySubtext: { color: '#bbb', marginTop: 8 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#3498db',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  }
});

export default HomeScreen;

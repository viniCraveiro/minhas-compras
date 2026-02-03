import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/routes';
import { ProductService } from '../db/client';

type DetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen = () => {
  const route = useRoute<DetailRouteProp>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await ProductService.getById(route.params.productId);
        if (result) {
          setProduct(result);
        }
      } catch (err) {
        console.error('Erro ao buscar detalhe:', err);
      }
    };
    fetchProduct();
  }, [route.params.productId]);

  if (!product) return <View style={styles.container}><Text>Carregando...</Text></View>;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>{product.name}</Text>
        
        <Text style={styles.label}>Preço Atual</Text>
        <Text style={[styles.value, styles.price]}>R$ {Number(product.price).toFixed(2)}</Text>

        {product.barcode && (
          <>
            <Text style={styles.label}>Código de Barras</Text>
            <Text style={styles.value}>{product.barcode}</Text>
          </>
        )}

        <Text style={styles.label}>Cadastrado em</Text>
        <Text style={styles.value}>{new Date(product.created_at).toLocaleDateString()}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  card: { backgroundColor: 'white', padding: 20, margin: 15, borderRadius: 10, elevation: 2 },
  label: { fontSize: 12, color: '#999', marginBottom: 2 },
  value: { fontSize: 18, marginBottom: 15, fontWeight: '500' },
  price: { color: '#2ecc71', fontSize: 24, fontWeight: 'bold' }
});

export default ProductDetailScreen;

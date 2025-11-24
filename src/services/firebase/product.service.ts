import {
    addDoc,
    collection,
    doc,
    getDocs,
    QuerySnapshot,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { Product } from "../../types/Product";

// Referência para a coleção "products"
const productCollection = collection(firestore, "products");

/**
 * Função para criar um novo produto no Firestore
 */
export async function createProduct(product: Product) {
    try {
        // Adiciona um produto na coleção e registra o timestamp de criação e atualização
        const docRef = await addDoc(productCollection, {
            ...product,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });
        return docRef.id;  // Retorna o ID do novo documento
    } catch (error) {
        console.error("Erro ao criar o produto:", error);
        throw error;
    }
}

/**
 * Função para atualizar um produto existente no Firestore
 */
export async function updateProduct(id: string, product: Partial<Product>) {
    try {
        const ref = doc(firestore, "products", id); // Referência para o produto com o ID especificado
        // Atualiza o produto e registra o timestamp de atualização
        await updateDoc(ref, {
            ...product,
            updatedAt: serverTimestamp(),
        });
        console.log("Produto atualizado com sucesso.");
    } catch (error) {
        console.error("Erro ao atualizar o produto:", error);
        throw error;
    }
}

/**
 * Função para obter todos os produtos da coleção "products"
 */
export async function getAllProducts(): Promise<Product[]> {
    try {
        const snapshot: QuerySnapshot = await getDocs(productCollection);  // Obtém todos os documentos
        return snapshot.docs.map((doc) => ({
            id: doc.id,  // Inclui o ID do documento
            ...doc.data(),  // Inclui os dados do documento
        })) as Product[];  // Retorna os produtos tipados corretamente
    } catch (error) {
        console.error("Erro ao obter produtos:", error);
        throw error;
    }
}

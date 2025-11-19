import {
    collection,
    addDoc,
    updateDoc,
    doc,
    getDocs,
    serverTimestamp,
} from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { Product } from "../../types/Product";

const productCollection = collection(firestore, "products");

export async function createProduct(product: Product) {
    return await addDoc(productCollection, {
        ...product,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    });
}

export async function updateProduct(id: string, product: Partial<Product>) {
    const ref = doc(firestore, "products", id);
    return updateDoc(ref, {
        ...product,
        updatedAt: serverTimestamp(),
    });
}

export async function getAllProducts(): Promise<Product[]> {
    const snapshot = await getDocs(productCollection);
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as Product[];
}

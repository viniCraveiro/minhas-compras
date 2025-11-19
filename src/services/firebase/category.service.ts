import {
    collection,
    addDoc,
    getDocs,
} from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { Category } from "../../types/Category";

const categoryCollection = collection(firestore, "categories");

export async function createCategory(category: Category) {
    return addDoc(categoryCollection, category);
}

export async function getAllCategories(): Promise<Category[]> {
    const snapshot = await getDocs(categoryCollection);
    return snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
    })) as Category[];
}

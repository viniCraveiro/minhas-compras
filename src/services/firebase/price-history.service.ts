import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { PriceHistory } from "../../types/PriceHistory";

const historyCollection = collection(firestore, "priceHistory");

export async function addPriceHistory(entry: PriceHistory) {
    return addDoc(historyCollection, entry);
}

export async function getProductPriceHistory(productId: string) {
    const q = query(historyCollection, where("productId", "==", productId));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as PriceHistory[];
}

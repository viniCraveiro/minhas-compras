import { FieldValue } from "firebase/firestore";

export interface Product {
    id?: string;
    name: string;
    categoryId: string;
    price: number;
    imageUrl?: string;
    createdAt: FieldValue;
    updatedAt: FieldValue;
}

export interface Product {
    id?: string;
    name: string;
    categoryId: string;
    price: number;
    imageUrl?: string;
    createdAt: number;
    updatedAt: number;
}

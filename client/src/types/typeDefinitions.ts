export interface FetchResponse<Type> {
    result: Type[]
}


export type ActiveUser = {
    username: string;
}
  
export type Client = {
    _id: string;
    name: string;
    phone: number;
    email: string;
    address: string;
};

export type Product = {
    description: string;
    quantity: number;
    unitprice: number;
    amount: number;
};

export type InvoiceData = {
    _id: string;
    status: string;
    duedate: Date;
    client: Client;
    products: Product[];
    createdAt: Date;
    total: number;
    vat: number;
    grandTotal: number;
};


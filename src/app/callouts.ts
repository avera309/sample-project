export interface callouts {
    category: string,
    name: string,
    description: string,
    imageSrc: any,
    imageAlt: string,
    href: any,
}
export interface productList {
    category: string,
    id: number,
    name: string,
    Description:string,
    href: any,
    price: string,
    imageSrc: any,
    imageAlt: any,
}
export interface Cart{
    items:Array<CartItem>;
}
export interface CartItem{
    category: string;
    id: number;
    name: string;
    href: any;
    price: string;
    imageSrc: any;
    imageAlt: any;
    quantity: number;
}

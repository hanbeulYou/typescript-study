interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  // ..
}

let products: Product[] = [
  { id: 1, name: '참치김밥', price: 3000, brand: '김가네', stock: 3 },
];

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// function displayProduct(productInfo: ProductDetail) {
//   // ...
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProduct(productInfo: ShoppingItem) {
  // ...
}


// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

// type UpdateProduct = {
//     id?: Product["id"];
//     name?: Product["name"];
//     price?: Product["price"];
//     brand?: Product["brand"];
//     stock?: Product["stock"];
// }

// mapped-types
// type UpdateProduct = {
//   [p in 'id' | 'name' | 'price' | 'brand' | 'stock']?: Product[p];
// }
// type ProductKeys = keyof Product;

// type UpdateProduct = {
//   [p in keyof Product]?: Product[p];
// }

// type UpdateProduct<T> = {
//   [p in keyof T]?: T[p];
// }

type UpdateProduct = Partial<Product>
// 모든 타입을 넣어도 되고 넣지 않아도 됨

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {

}

// #1 - Partial
type Subset<T> = {
  [K in keyof T]?: T[K];
};

const productDetail: Product = {
  id: 1,
};

// #2 - Pick
type PickFewThings<T, K extends keyof T> = {
  [P in K]: T[P];
}

const productName: PickFewThings<Product, 'name'> = {

}
const productNameWithPrice: PickFewThings<Product, 'name' | 'price'> = {
  
}
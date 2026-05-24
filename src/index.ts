import products from "./products.json";

class ListaDeCosas {
  name: string;
  cosas: any[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(nuevaCosa: any) {
    this.cosas.push(nuevaCosa);
  }

  getCosas() {
    return this.cosas;
  }
}

class Product {
  name: string;
  price: number;
  id: number;

  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  constructor(name: string){
    super(name);

    products.forEach((product) =>{
      this.addProduct(product);
    });
  }
addProduct(product: Product): void {
  const productExists = this.getProduct(product.id);

  if(!productExists){
    this.add(product);
  }
}

getProduct(id: number): Product {
  return this.cosas.find((product) => product.id === id);
}

removeProduct(id: number): void {
  this.cosas = this.cosas.filter((product) => product.id !== id);
}

getSortedByPrice(order: string): Product [] {
  const productsCopy = [...this.cosas];

  if (order === "asc"){
    return productsCopy.sort((a, b) => a.price - b.price);

  }

  if (order == "desc"){
    return productsCopy.sort((a, b) => b.price - a.price);
  }

  return productsCopy;
}
}

export { ListaDeProductos, Product };

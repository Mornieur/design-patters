import { CompositeProduct, IndividualProduct } from "./product";

const notebook = new IndividualProduct("Notebook", 4000);

const comboLivros = new CompositeProduct();
comboLivros.addProduct(new IndividualProduct("Livro 1", 30));
comboLivros.addProduct(new IndividualProduct("Livro 2", 20));
comboLivros.addProduct(new IndividualProduct("Livro 3", 10));

console.log("preço do notebook", notebook.getPrice());
console.log("preço do combo de livros", comboLivros.getPrice());

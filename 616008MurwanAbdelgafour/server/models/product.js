let products = [
    {prodId: 1, name: 'Node.js', price: 9.99, image: './image1.jpg', stock: 8},
    {prodId: 2, name: 'React', price: 19.99, image: './image2.jpg', stock: 5},
    {prodId: 3, name: 'Angular', price: 29.99, image: './image3.jpg', stock: 13}
]

class Product{
    constructor(id, name, price, image, stock){
        this.prodId = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.stock = stock;
    }

    static getAll(){
        return products;
    }

    static checkEnoughStock(prodId, quantity){
        const index = products.findIndex(prod => prod.prodId == prodId);
        if(index > -1){
            let st = products[index].stock;
            if(st>quantity){
                products[index].stock = st - quantity;
                return true;
            }else{
                return new Error('Stock is less than quantity');
            }
        }else{
            return new Error('Product not found');
        }
    }
}
module.exports = Product;
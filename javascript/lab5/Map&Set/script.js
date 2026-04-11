let products = new Map();
let orderedProducts = new Set();
let history = new WeakMap();

function addProduct(id, name, price, count) {
    products.set(id, { name, price, count });
}

deleteProduct = (id) => {
    if (products.has(id)) {
        products.delete(id);
    } else {
        console.log(`Product with id ${id} does not exist.`);
    }
}

function updateProduct(id, price, count) {
    if (products.has(id)) {
        const product = products.get(id);
        products.set(id, { ...product, price, count });
        addHistory(product, new Date());
    } else {
        console.log(`Product with id ${id} does not exist.`);
    }
}

function findByName(name) {
    for (let [id, product] of products) {
        if (product.name === name) {
            return { id, ...product };
        }
    }
    console.log(`Product with name ${name} does not exist.`);
    return null;
}

function isBought(id) {
    if (products.has(id)) {
        const product = products.get(id);
        product.count--;
        products.set(id, product);
        return product.count > 0;
    } else {
        console.log(`Product with id ${id} does not exist.`);
        return false;
    }
}

function isBoughtOneMore(id) {
    if (!products.has(id)) {
        console.log(`Product with id ${id} does not exist.`);
        return false;
    }
    const product = products.get(id);
    if (orderedProducts.has(product)) {
        console.log(`Product with id ${id} has already been bought.`);
        return false;
    }
    orderedProducts.add(product);
    product.count--;
    products.set(id, product);
    return product.count > 0;
}

function addHistory(product, date) {
    if (!history.has(product)) {
        history.set(product, []);
    }
    history.get(product).push(date);
}

addProduct(1, 'Tolik', 10, 5);
addProduct(2, 'Banana', 5, 3);
addProduct(3, 'Orange', 8, 10);

console.log(products);

updateProduct(1, 12, 4);
console.log(products);
deleteProduct(2);
console.log(products);
console.log(findByName('Orange'));
console.log(isBought(3));
console.log(isBoughtOneMore(1));

console.log(products);
console.log(orderedProducts);

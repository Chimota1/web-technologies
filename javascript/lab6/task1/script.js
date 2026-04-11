'use strict';

const addButton = document.getElementById('add-button');
const filterButton = document.getElementById('filter-button');
const resetFilterButton = document.getElementById('reset-filter-button');
const sortButton = document.getElementById('sort-button');
const categorySelect = document.querySelector('.category-set');
const categoryEquipmentButton = document.getElementById('category-set__equipment');
const categoryClothingButton = document.getElementById('category-set__clothing');
const categoryFoodButton = document.getElementById('category-set__food');
const addForm = document.getElementById('add-product__form');
const changeSubmitButton = document.getElementById('change-submit-button');
const sortByPriceButton = document.getElementById('sort-by-price');
const sortByCreatedAtButton = document.getElementById('sort-by-createdAt');
const sortByUpdatedAtButton = document.getElementById('sort-by-updatedAt');
const resetSortButton = document.getElementById('reset-sort-button');
let totalAmount = document.getElementById('total-amount');
let addImageInput = document.getElementById('product-image-input');
let addNameInput = document.getElementById('product-name-input');
let addPriceInput = document.getElementById('product-price-input');
let addCategoryInput = document.getElementById('product-category-input');
let modalAdd = document.querySelector('.modal-add');
let modalChange = document.querySelector('.modal-change');
let changeForm = document.getElementById('change-product__form');
let productList = document.querySelector('.product-list');
let listEmpty = document.querySelector('.list-empty');
let snackbar = document.querySelector('.snackbar');
let snackbarText = document.querySelector('.snackar__text');
let listEmptyText = document.getElementById('list-empty__text');

let currentEditProductId = null;
let products = [];

function generateId() {
    return products.length === 0 ? 1 : Math.max(...products.map(p => p.id)) + 1;
}

function updateTotalAmount() {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    totalAmount.textContent = total;
}

function showSnackbar(message) {
    snackbarText.textContent = message;
    snackbar.classList.remove('hide');
    snackbar.classList.add('show');
    setTimeout(() => {
        snackbar.classList.remove('show');
        snackbar.classList.add('hide');
    }, 3000);
}

function deleteProduct(cardId) {
    const productToDelete = products.find(product => product.id === cardId);
    if (!productToDelete) return null;
    products = products.filter(product => product.id !== cardId);
    showSnackbar(`Товар "${productToDelete.name}" видалено!`);
    updateTotalAmount();
    if (products.length === 0) {
        listEmpty.classList.remove('hide');
        listEmptyText.textContent = 'Наразі список товарів пустий. Додайте новий товар.';
        productList.classList.remove('show');
    }
    renderAllProducts();
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card', 'show');
    card.innerHTML = `
        <div class="product-card__img">
            <img src="${product.image}" alt="картинка товару">
        </div>
        <div class="product-card__info">
            <p class="product-card__text">id: <span>${product.id}</span></p>
            <p class="product-card__text">Назва: <span>${product.name}</span></p>
            <p class="product-card__text">Ціна: <span>${product.price} ₴</span></p>
            <p class="product-card__text">Категорія: <span>${product.category}</span></p>
            <div class="product-card__info__buttons">
                <button class="info-buttons btn-edit">Редагувати</button>
                <button class="info-buttons btn-delete">Видалити</button>
            </div>
        </div>
    `;
    productList.appendChild(card);

    card.querySelector('.btn-edit').addEventListener('click', () => {
        currentEditProductId = product.id;
        modalChange.classList.remove('hide');
        modalChange.classList.add('show');
    });

    card.querySelector('.btn-delete').addEventListener('click', () => {
        card.classList.remove('show');
        card.classList.add('hide');
        setTimeout(() => deleteProduct(product.id), 300);
    });
}

function renderAllProducts() {
    productList.innerHTML = '';
    products.forEach(product => createProductCard(product));
}

const addProduct = (e) => {
    e.preventDefault();
    const product = {
        id: generateId(),
        name: addNameInput.value,
        price: parseFloat(addPriceInput.value),
        category: addCategoryInput.value,
        image: addImageInput.value,
        createdAt: new Date()
    };
    products = [...products, product];
    listEmpty.classList.add('hide');
    productList.classList.add('show');
    showSnackbar(`Товар "${product.name}" додано!`);
    createProductCard(product);
    updateTotalAmount();
    modalAdd.classList.remove('show');
    modalAdd.classList.add('hide');
    addForm.reset();
}

const updateProduct = (cardId, productData) => {
    products = products.map(product => {
        if (product.id === cardId) {
            return { ...product,
                name: productData.name,
                price: productData.price,
                category: productData.category,
                image: productData.image,
                updatedAt: new Date()
            };
        }
        return product;
    });
    showSnackbar(`Товар "${productData.name}" оновлено!`);
    updateTotalAmount();
    renderAllProducts();
    modalChange.classList.remove('show');
    modalChange.classList.add('hide');
}

const filterProducts = (category) => {
    const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    productList.innerHTML = '';
    if (filteredProducts.length === 0) {
        listEmpty.classList.remove('hide');
        listEmptyText.textContent = 'Немає товарів у цій категорії';
        return;
    }
    listEmpty.classList.add('hide');
    filteredProducts.forEach(product => createProductCard(product));
}

addButton.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalAdd.classList.add('show');
});

addForm.addEventListener('submit', addProduct);

changeForm.onsubmit = (e) => {
    e.preventDefault();
    const productData = {
        name: document.getElementById('change-product-name-input').value,
        price: parseFloat(document.getElementById('change-product-price-input').value),
        category: document.getElementById('change-product-category-input').value,
        image: document.getElementById('change-product-image-input').value
    };
    updateProduct(currentEditProductId, productData);
};

filterButton.addEventListener('click', () => {
    categorySelect.classList.add('show');
    resetFilterButton.classList.add('show');
});

categoryEquipmentButton.addEventListener('click', () => filterProducts('Техніка'));
categoryClothingButton.addEventListener('click', () => filterProducts('Одяг'));
categoryFoodButton.addEventListener('click', () => filterProducts('Продукти'));


resetFilterButton.addEventListener('click', () => {
    renderAllProducts();
    categorySelect.classList.remove('show');
    resetFilterButton.classList.remove('show');
    listEmpty.classList.add('hide');
});

const sortByPrice = () => {
    products.sort((a, b) => a.price - b.price);
    renderAllProducts();
}

const sortByCreatedAt = () => {
    products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    renderAllProducts();
}

const sortByUpdatedAt = () => {
    products.sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
    renderAllProducts();
}

sortByPriceButton.addEventListener('click', sortByPrice);
sortByCreatedAtButton.addEventListener('click', sortByCreatedAt);
sortByUpdatedAtButton.addEventListener('click', sortByUpdatedAt);

sortButton.addEventListener('click', () => {
    document.querySelector('.sort-by').classList.add('show');
    resetSortButton.classList.add('show');
});

const resetSorting = () => {
    renderAllProducts();
    document.querySelector('.sort-by').classList.remove('show');
    resetSortButton.classList.remove('show');
}

resetSortButton.addEventListener('click', resetSorting);

import { updateCartUI } from "./counter.js";

export function getProductCard(product) {
    const { id, title, price, imgUrl } = product;

    const item = document.createElement("li");
    item.classList.add("product-list_item");
    item.style.position = "relative";

    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = title;
    image.classList.add("product-img");

    const productTitle = document.createElement("h2");
    productTitle.classList.add("product-list_title");
    productTitle.textContent = title;

    const productPrice = document.createElement("strong");
    productPrice.classList.add("product-list_price");
    productPrice.textContent = `${price} руб`;

    const addBtn = document.createElement("img");
    addBtn.src = "./icons/add.png";
    addBtn.alt = "Добавить в корзину";
    addBtn.classList.add("icon-btn");
    addBtn.style.position = "absolute";
    addBtn.style.top = "10px";
    addBtn.style.left = "10px";

    addBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const basket = JSON.parse(localStorage.getItem("basket")) || [];
        const index = basket.findIndex(p => p.id === id);
        if (index > -1) basket[index].qty += 1;
        else basket.push({...product, qty: 1});
        localStorage.setItem("basket", JSON.stringify(basket));
        updateCartUI();
        addBtn.src = "./icons/added.png";
    });

    const learnMore = document.createElement("img");
    learnMore.src = "./icons/learnmore1.png";
    learnMore.alt = "Узнать больше";
    learnMore.classList.add("icon-btn");
    learnMore.style.position = "absolute";
    learnMore.style.top = "10px";
    learnMore.style.right = "10px";

    learnMore.addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.hash = `product-${id}`;
    });

    item.addEventListener("click", () => {
        window.location.hash = `product-${id}`;
    });

    item.append(image, productTitle, productPrice, addBtn, learnMore);
    return item;
}

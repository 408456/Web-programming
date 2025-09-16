import { updateCartUI } from "../components/counter.js";

export function getProductCard(id, title, price, imgUrl) {
    const item = document.createElement("li");
    item.classList.add("product-list_item");
    item.style.position = "relative";
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = title;
    image.classList.add("product-img", "product-img-fixed");

    // Заголовок и цена
    const productTitle = document.createElement("h2");
    productTitle.classList.add("product-list_title");
    productTitle.textContent = title;

    const productPrice = document.createElement("strong");
    productPrice.classList.add("product-list_price");
    productPrice.textContent = `${price} руб`;

    // Кнопка добавить в корзину (слева сверху)
    const addBasket = document.createElement("img");
    addBasket.src = "./icons/add.png";
    addBasket.alt = "Добавить в корзину";
    addBasket.classList.add("icon-btn");
    addBasket.style.position = "absolute";
    addBasket.style.top = "10px";
    addBasket.style.left = "10px";

    addBasket.addEventListener("click", () => {
        const basket = JSON.parse(localStorage.getItem("basket")) || [];
        const index = basket.findIndex(p => p.id === id);
        if (index > -1) basket[index].qty += 1;
        else basket.push({ id, title, price, imgUrl, qty: 1 });
        localStorage.setItem("basket", JSON.stringify(basket));

        // updateCartUI();

        // Меняем иконку на "добавлено"
        addBasket.src = "./icons/added.png";
        addBasket.classList.add("active");
        setTimeout(() => addBasket.classList.remove("active"), 200);
    });

    // Кнопка LearnMore (справа сверху)
    const learMore = document.createElement("img");
    learMore.src = "./icons/learnmore1.png";
    learMore.alt = "Узнать больше";
    learMore.classList.add("icon-btn");
    learMore.style.position = "absolute";
    learMore.style.top = "10px";
    learMore.style.right = "10px";

    learMore.addEventListener("click", () => {
        window.location.hash = `product-${id}`;
        learMore.classList.add("active");
        setTimeout(() => learMore.classList.remove("active"), 200);
    });

    item.append(image, productTitle, productPrice, addBasket, learMore);
    return item;
}

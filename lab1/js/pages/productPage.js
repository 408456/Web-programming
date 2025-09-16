import { getMainTitle } from "../components/mainTitle.js";
import { updateCartUI } from "../components/counter.js";

export function getProductPage(product) {
    // product = {id, title, price, imgUrl, videoUrl, description}

    const page = document.createElement("div");
    page.classList.add("page", "product-page", "container");

    const title = getMainTitle(product.title);
    page.append(title);

    const content = document.createElement("div");
    content.classList.add("product-content");

    // Картинка слева
    const img = document.createElement("img");
    img.src = product.imgUrl;
    img.alt = product.title;
    img.classList.add("product-detail-img");

    // Правая колонка с описанием и видео
    const info = document.createElement("div");
    info.classList.add("product-info");

    const desc = document.createElement("p");
    desc.textContent = product.description;
    desc.classList.add("product-history");

    const video = document.createElement("video");
    video.src = product.videoUrl;
    video.controls = true;
    video.classList.add("product-video");

    const addBtn = document.createElement("img");
    addBtn.src = "./icons/add.png";
    addBtn.alt = "Добавить в корзину";
    addBtn.classList.add("icon-btn");

    addBtn.addEventListener("click", () => {
        const basket = JSON.parse(localStorage.getItem("basket")) || [];
        const index = basket.findIndex(p => p.id === product.id);
        if (index > -1) basket[index].qty += 1;
        else basket.push({...product, qty: 1});
        localStorage.setItem("basket", JSON.stringify(basket));
        updateCartUI();
        addBtn.src = "./icons/added.png"; 
    });

    info.append(desc, video);
    content.append(img, info);
    page.append(content);

    return page;
}

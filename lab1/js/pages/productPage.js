import { getMainTitle } from "../components/mainTitle.js";

// Пример массива всех гитар
const products = [
    {
        id: "1",
        title: "Fender Stratocaster",
        imgUrl: "./img/farida.jpg",
        history: "Fender Stratocaster – легендарная гитара, созданная в 1954 году...",
        video: "https://www.youtube.com/embed/VIDEO_ID_1"
    },
    {
        id: "2",
        title: "Yamaha Keyboard",
        imgUrl: "./img/keyboard.jpg",
        history: "Yamaha Keyboard – профессиональная клавиатура...",
        video: "https://www.youtube.com/embed/VIDEO_ID_2"
    },
    {
        id: "3",
        title: "Pearl Drum Set",
        imgUrl: "./img/drum.jpg",
        history: "Pearl Drum Set – высококачественный набор барабанов...",
        video: "https://www.youtube.com/embed/VIDEO_ID_3"
    }
];

export function getProductPage(id) {
    const product = products.find(p => p.id === id);
    if (!product) return document.createTextNode("Продукт не найден");

    const page = document.createElement("div");
    page.classList.add("page", "product-page", "container");

    const title = getMainTitle(product.title);
    const img = document.createElement("img");
    img.src = product.imgUrl;
    img.alt = product.title;
    img.classList.add("product-detail-img");

    const history = document.createElement("p");
    history.classList.add("product-history");
    history.textContent = product.history;

    const video = document.createElement("iframe");
    video.src = product.video;
    video.classList.add("product-video");
    video.frameBorder = 0;
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video.allowFullscreen = true;

    page.append(title, img, history, video);
    return page;
}

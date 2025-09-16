import { getMainTitle } from "../components/mainTitle.js"
export function getCatalogPage() {
    const page = document.createElement("div");
    page.classList.add("page", "catalog-page", "container");

    const title = getMainTitle("Каталог гитар");
    page.append(title);

    const products = [
        {
            id: 1,
            title: "Fender Stratocaster",
            history: "Fender Stratocaster – культовая электрогитара...",
            video: "./videos/stratocaster-demo.mp4",
            img: "./img/farida.jpg"
        },
        // можно добавить другие товары
    ];

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("catalog-card");

        const img = document.createElement("img");
        img.src = product.img;
        img.alt = product.title;
        img.classList.add("catalog-img");

        const desc = document.createElement("p");
        desc.textContent = product.history;
        desc.classList.add("catalog-desc");

        const video = document.createElement("video");
        video.src = product.video;
        video.controls = true;
        video.classList.add("catalog-video");

        card.append(img, desc, video);
        page.append(card);
    });

    return page;
}
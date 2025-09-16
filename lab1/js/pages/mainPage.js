import { getProductCard } from "../components/productCard.js";
import { getMainTitle } from "../components/mainTitle.js";

export function getMainPage(products) {
    const page = document.createElement("div");
    page.classList.add("page", "main-page", "container");

    const title = getMainTitle("");
    page.append(title);

    const list = document.createElement("ul");
    list.classList.add("product-list", "list-reset");

    products.forEach(p => list.append(getProductCard(p)));

    page.append(list);
    return page;
}

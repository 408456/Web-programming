import { getMainTitle } from "../components/mainTitle.js"
export function getCatalogPage() {
    const page = document.createElement("div");
    page.classList.add("page", "catalog-page", "container");
    const title = getMainTitle("Каталог");
    const desc = document.createElement("p");
    desc.textContent = "Страница в разработке";
    
    page.append(title, desc);
    return page;
}

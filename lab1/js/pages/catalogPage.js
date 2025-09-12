import { getMainTitle } from "../components/mainTitle.js"
import { getProductDescription } from "../components/productDescription.js"
export function getCatalogPage() {
    const page = document.createElement("div")
    page.classList.add("page", "catalog-page", "container")

    const title = getMainTitle("Каталог")
    const desc = getProductDescription("Страница в разработке")

    page.append(title, desc)
    return page
}
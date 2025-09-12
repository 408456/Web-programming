import { getMainTitle } from "../components/mainTitle.js"
import { getProductDescription } from "../components/productDescription.js"

export function getProductPage() {
    const page = document.createElement("div")
    page.classList.add("page", "product-page", "container")

    const title = getMainTitle("Продукт")
    const desc = getProductDescription("Страница в разработке")

    page.append(title, desc)
    return page
}
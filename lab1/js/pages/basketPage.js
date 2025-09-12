import { getMainTitle } from "../components/mainTitle.js"
import { getProductDescription } from "../components/productDescription.js"

export function getBasketPage() {
    const page = document.createElement("div")
    page.classList.add("page", "basket-page", "container")

    const title = getMainTitle("Корзина")
    const desc = getProductDescription("Страница в разработке")

    page.append(title, desc)
    return page
}

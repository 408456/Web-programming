import { getMainTitle } from "../components/mainTitle.js"
import { getProductCard } from "../components/productCard.js"

export function getMainPage() {
    const page = document.createElement("div")
    page.classList.add("page", "main-page", "container")

    const title = getMainTitle("Главная страница")
    const list = document.createElement("ul")
    list.classList.add("product-list", "list-reset")

    list.append(
        getProductCard("Товар 1", 5400),
        getProductCard("Товар 2", 3200),
        getProductCard("Товар 3", 9100),
        getProductCard("Товар 4", 12000)
    )

    page.append(title, list)
    return page
}
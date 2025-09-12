import { getMainTitle } from "../components/mainTitle.js"
import { getProductCard } from "../components/productCard.js"

export function getMainPage() {
    const page = document.createElement("div")
    page.classList.add("page", "main-page", "container")

    const title = getMainTitle("Главная страница")
    const list = document.createElement("ul")
    list.classList.add("product-list", "list-reset")

    // Товары с картинками
    list.append(
        getProductCard("Fender Stratocaster", 5400, "./img/farida.jpg"),
        getProductCard("Fender Stratocaster", 5400, "./img/farida.jpg"),
        getProductCard("Fender Stratocaster", 5400, "./img/farida.jpg"),
        getProductCard("Fender Stratocaster", 5400, "./img/farida.jpg")
    )

    page.append(title, list)
    return page
}

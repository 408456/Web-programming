import { getMainTitle } from "../components/mainTitle.js"
import { getProductDescription } from "../components/productDescription.js"
export function getOrderPage() {
    const page = document.createElement("div")
    page.classList.add("page", "catalog-page", "container")

    const title = getMainTitle("Оформление")
    const desc = getProductDescription("Оформление заказа")

    page.append(title, desc)
    return page
}
import { getMainTitle } from "../components/mainTitle.js"
import { getProductCard } from "../components/productCard.js"

export function getMainPage() {
    const page = document.createElement("div")
    page.classList.add("page", "main-page", "container")

    const title = getMainTitle("")
    const list = document.createElement("ul")
    list.classList.add("product-list", "list-reset")

    // Товары 
    list.append(
    getProductCard(2, "Yamaha Keyboard", 7400, "./img/fender.png"),
    getProductCard(3, "Pearl Drum Set", 12500, "./img/gretschG54.png"),
    getProductCard(4, "Fender Stratocaster", 5400, "./img/fender1954.png"),
    getProductCard(5, "Yamaha Keyboard", 7400, "./img/fender.png"),
    getProductCard(8, "Yamaha Keyboard", 7400, "./img/fender.png"),
    getProductCard(10, "Fender Stratocaster", 5400, "./img/fender1954.png"),
    getProductCard(11, "Yamaha Keyboard", 7400, "./img/fender.png"),
    getProductCard(12, "Pearl Drum Set", 12500, "./img/gretschG54.png")
    
)


    page.append(title, list)
    return page
}

import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/pageContainer.js"
import {getMainPage} from "./pages/mainPage.js"
import { getCatalogPage } from "./pages/catalogPage.js"
import { getBasketPage } from "./pages/basketPage.js"

const app = document.getElementById("app")
const header = getHeader()
const pageContainer = getPageContainer()

export function navigation(page) {
    pageContainer.innerHTML = ""
    console.log(page)

    switch (page) {
        case "catalog":
            const catalogPage = getCatalogPage()
            pageContainer.append(catalogPage)
            break
        case "basket":
            const basketPage = getBasketPage()
            pageContainer.append(basketPage)
            break
        default:
            const mainPage = getMainPage()
            pageContainer.append(mainPage)
            break
    }

}
navigation()

app.append(header, pageContainer)

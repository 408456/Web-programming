import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/pageContainer.js"
import {getMainPage} from "./pages/mainPage.js"

const app = document.getElementById("app")
const header = getHeader()
const pageContainer = getPageContainer()

export async function navigation(page) {
    pageContainer.innerHTML = ""
    console.log(page)

    switch (page) {
        case "catalog":
            const pageModuleCatalog = await import("./pages/catalogPage.js")
            const catalogPage = pageModuleCatalog.getCatalogPage()
            pageContainer.append(catalogPage)
            break
        case "basket":
            const pageModuleBasket = await import("./pages/basketPage.js")
            const basketPage = pageModuleBasket.getBasketPage()
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

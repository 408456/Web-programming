import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/pageContainer.js"
import { getOrderPage } from "./pages/orderPage.js"

const app = document.getElementById("app")
const header = getHeader()
const pageContainer = getPageContainer()

export async function navigation(page) {
    pageContainer.innerHTML = ""

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

        case "product":
            const pageModuleProduct = await import("./pages/productPage.js")
            const productPage = pageModuleProduct.getProductPage()
            pageContainer.append(productPage)
            break

        case "order":
            
            const pageModuleOrder = await import("./pages/orderPage.js")
            const orderPage = pageModuleOrder.getOrderPage()
            pageContainer.append(orderPage)
            break


        default:
            const pageModuleMain = await import("./pages/mainPage.js")
            const mainPage = pageModuleMain.getMainPage()
            pageContainer.append(mainPage)
            break
    }
}

window.addEventListener("hashchange", () => {
    const page = window.location.hash.slice(1) 
    navigation(page)
})

const initialPage = window.location.hash.slice(1) || ""
navigation(initialPage)

app.append(header, pageContainer)

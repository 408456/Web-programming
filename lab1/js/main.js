import { getHeader } from "./components/header.js";
import { getPageContainer } from "./components/pageContainer.js";
import { getOrderPage } from "./pages/orderPage.js";
import { getBasketPage } from "./pages/basketPage.js";

const app = document.getElementById("app");
const header = getHeader();
const pageContainer = getPageContainer();

// Один раз вставляем шапку и контейнер в DOM
app.append(header, pageContainer);

// Навигация
export async function navigation(page) {
    pageContainer.innerHTML = "";

    // Динамические страницы для каждой гитары
    if (page.startsWith("product-")) {
        const productId = page.split("-")[1];
        const pageModuleProduct = await import("./pages/productPage.js");
        const productPage = pageModuleProduct.getProductPage(productId);
        pageContainer.append(productPage);
        return;
    }

    switch (page) {
        case "basket":
            pageContainer.append(getBasketPage());
            break;

        case "order":
            const pageModuleOrder = await import("./pages/orderPage.js");
            const orderPage = pageModuleOrder.getOrderPage();
            pageContainer.append(orderPage);
            break;

        default:
            const pageModuleMain = await import("./pages/mainPage.js");
            const mainPage = pageModuleMain.getMainPage();
            pageContainer.append(mainPage);
            break;
    }
}

// Обработчик изменения хэша
window.addEventListener("hashchange", () => {
    const page = window.location.hash.slice(1);
    navigation(page);
});

// Инициализация страницы
const initialPage = window.location.hash.slice(1) || "";
navigation(initialPage);

import { getHeader } from "./components/header.js";
import { getPageContainer } from "./components/pageContainer.js";
import { getMainPage } from "./pages/mainPage.js";
import { getProductPage } from "./pages/productPage.js";

const app = document.getElementById("app");
const header = getHeader();
const pageContainer = getPageContainer();

const products = [
    {id: 1, title: "Fender Stratocaster Standard", price: 25400, imgUrl: "./img/fender.png", videoUrl: "https://rutube.ru/video/d6ed7f857ca6a661c73b62965db2cc27/", description: "Классическая электрогитара с корпусом из попла, оснащённая тремя синглами Fender Standard для универсального звучания. Идеальна для рок, блюза и поп-музыки."},
    {id: 2, title: "Fender 1951 Precision Bass Neck", price: 17400, imgUrl: "./img/fender1951.png", videoUrl: "https://rutube.ru/video/8f41af61a6485067965bccec7019211c/?ysclid=mfmwhoc4yb273892039", description: "Оригинальный бас-гриф 1951 года с U-образным профилем и 20 ладами. Используется для создания винтажных басов с характерным тоном."},
    {id: 3, title: "Fender 70th Anniversary 1954", price: 12500, imgUrl: "./img/fender1954.png", videoUrl: "./video/drums.mp4", description: "Юбилейная модель с 2-составным ясеневым корпусом, 1-составным кленовым грифом и винтажными синглами. Отличается теплотой и яркостью звучания."}, 
    {id: 4, title: "Gibson ES-345 Vintage", price: 35400, imgUrl: "./img/gibson345.png", videoUrl: "./video/strat.mp4", description: "Полуакустическая гитара с трёхслойным корпусом из клена и магагония, оснащённая хамбакерами T-Type. Идеальна для джаза и блюза."},
    {id: 5, title: "Gretsch G5422TG Limited Edition Electromatic", price: 73400, imgUrl: "./img/gretschG54.png", videoUrl: "./video/yamaha.mp4", description: "Полуакустическая гитара с двойным вырезом и Bigsby, оснащённая двумя фильтронами Black Top Filter'Tron. Обладает ярким и резонансным звуком."},
    {id: 6, title: "Fender Stratocaster Standard Black", price: 124500, imgUrl: "./img/guitar.png", videoUrl: "./video/drums.mp4", description: "Электрогитара с чёрным корпусом и розвудовым грифом, оснащённая HSS-схемой для широкого диапазона звуков. Идеальна для рок и метала."}
];
export async function navigation(page) {
    pageContainer.innerHTML = "";

    if (page.startsWith("product-")) {
        const id = parseInt(page.split("-")[1]);
        const product = products.find(p => p.id === id);
        pageContainer.append(getProductPage(product));
    } else {
        switch(page) {
            case "basket":
                {
                    const { getBasketPage } = await import("./pages/basketPage.js");
                    pageContainer.append(getBasketPage());
                }
                break;
            case "order":
                {
                    const { getOrderPage } = await import("./pages/orderPage.js");
                    pageContainer.append(getOrderPage());
                }
                break;
            default:
                pageContainer.append(getMainPage(products));
                break;
        }
    }
}

window.addEventListener("hashchange", () => {
    const page = window.location.hash.slice(1);
    navigation(page);
});

navigation(window.location.hash.slice(1) || "");
app.append(header, pageContainer);

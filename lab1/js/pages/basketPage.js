import { getMainTitle } from "../components/mainTitle.js";
import { updateCartUI } from "../components/counter.js";

export function getBasketPage() {
    const page = document.createElement("div");
    page.classList.add("page", "basket-page", "container");

    const title = getMainTitle("Корзина");
    page.append(title);

    const basket = JSON.parse(localStorage.getItem("basket")) || [];

    if (basket.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "Корзина пуста";
        page.append(empty);
    } else {
        const list = document.createElement("ul");
        list.classList.add("basket-list", "list-reset");

        let total = 0;

        basket.forEach((item, index) => {
            total += item.price * item.qty;

            const li = document.createElement("li");
            li.classList.add("basket-item");

            const img = document.createElement("img");
            img.src = item.imgUrl;
            img.alt = item.title;
            img.classList.add("basket-img"); // CSS размер 80x80

            const name = document.createElement("span");
            name.textContent = item.title;
            name.classList.add("basket-title");

            const price = document.createElement("span");
            price.textContent = `${item.price} руб`;
            price.classList.add("basket-price");

            // Количество
            const qtyInput = document.createElement("input");
            qtyInput.type = "number";
            qtyInput.min = "1";
            qtyInput.value = item.qty;
            qtyInput.addEventListener("change", () => {
                const basket = JSON.parse(localStorage.getItem("basket")) || [];
                basket[index].qty = parseInt(qtyInput.value) || 1;
                localStorage.setItem("basket", JSON.stringify(basket));
                updateCartUI();
            });

            const removeBtn = document.createElement("img");
            removeBtn.src = "./icons/delete.png";
            removeBtn.alt = "Удалить";
            removeBtn.classList.add("icon-btn");
            removeBtn.dataset.index = index;
            removeBtn.addEventListener("click", (e) => {
                const idx = e.target.dataset.index;
                const basket = JSON.parse(localStorage.getItem("basket")) || [];
                basket.splice(idx, 1);
                localStorage.setItem("basket", JSON.stringify(basket));
                updateCartUI();
            });

            li.append(img, name, price, qtyInput, removeBtn);
            list.append(li);
        });

        page.append(list);

        const totalBlock = document.createElement("p");
        totalBlock.classList.add("basket-total");
        totalBlock.textContent = `Итого: ${total} руб`;
        page.append(totalBlock);

        // Кнопка оформить заказ
        const orderBtn = document.createElement("button");
        orderBtn.classList.add("btn");
        orderBtn.textContent = "Оформить заказ";
        orderBtn.addEventListener("click", () => {
            window.location.hash = "order";
        });

        page.append(orderBtn);
    }

    return page;
}

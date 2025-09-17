import { getMainTitle } from "../components/mainTitle.js";
import { updateCartUI } from "../components/counter.js";

function recalcTotal(basket, list, totalBlock) {
    list.innerHTML = "";
    let total = 0;

    basket.forEach((item, index) => {
        total += item.price * item.qty;

        const li = document.createElement("li");
        li.classList.add("basket-item");

        const img = document.createElement("img");
        img.src = item.imgUrl;
        img.alt = item.title;
        img.classList.add("basket-img");

        const name = document.createElement("span");
        name.textContent = item.title;
        name.classList.add("basket-title");

        const price = document.createElement("span");
        price.textContent = `${item.price} руб`;
        price.classList.add("basket-price");

        const qtyInput = document.createElement("input");
        qtyInput.type = "number";
        qtyInput.min = "1";
        qtyInput.value = item.qty;
        qtyInput.classList.add("basket-qty");
        qtyInput.addEventListener("change", () => {
            basket[index].qty = parseInt(qtyInput.value) || 1;
            localStorage.setItem("basket", JSON.stringify(basket));
            updateCartUI();
            recalcTotal(basket, list, totalBlock);
        });

        const removeBtn = document.createElement("img");
        removeBtn.src = "./icons/delete.png";
        removeBtn.alt = "Удалить товар";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => {
            basket.splice(index, 1);
            localStorage.setItem("basket", JSON.stringify(basket));
            updateCartUI();
            recalcTotal(basket, list, totalBlock);
        });

        li.append(img, name, price, qtyInput, removeBtn);
        list.append(li);
    });

    totalBlock.textContent = `Итого: ${total} руб`;
}

export function getBasketPage() {
    const page = document.createElement("div");
    page.classList.add("page", "basket-page", "container");

    const title = getMainTitle("Корзина");
    page.append(title);

    const basket = JSON.parse(localStorage.getItem("basket")) || [];

    if (basket.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "Корзина пуста";
        empty.style.textAlign = "center";
        empty.style.fontSize = "18px";
        page.append(empty);
    } else {
        const list = document.createElement("ul");
        list.classList.add("basket-list", "list-reset");

        const totalBlock = document.createElement("p");
        totalBlock.classList.add("basket-total");

        recalcTotal(basket, list, totalBlock);

        page.append(list, totalBlock);

        const orderBtn = document.createElement("button");
        orderBtn.classList.add("btn");
        orderBtn.textContent = "Оформить заказ";

        orderBtn.addEventListener("click", () => {
            if (basket.length === 0) {
                alert("Корзина пуста!");
                return;
            }
            window.location.hash = "order"; 
        });

        page.append(orderBtn);
    }

    return page;
}

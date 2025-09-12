export function getProductDescription (text) {
    const desc = document.createElement("p")
    desc.classList.add("desc")
    desc.textContent = text
    return desc

}
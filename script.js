document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#menu li");
    const itemName = document.getElementById("item-name");
    const itemPrice = document.getElementById("item-price");
    const itemDetails = document.getElementById("item-details");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            const name = item.getAttribute("data-name");
            const price = item.getAttribute("data-price");

            itemName.textContent = name;
            itemPrice.textContent = price;
            itemDetails.style.display = "block";
        });
    });
});

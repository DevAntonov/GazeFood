function subscribe() {
    alert("You successfully subscribed!");
}

function showPizzaPhotos() {
    const pizzaPhotos = document.querySelector('.pizza-photos');
    const pastaPhotos = document.querySelector('.pasta-photos');
    const mgPhotos = document.querySelector('.mg-photos');
    const dessertPhotos = document.querySelector('.dessert-photos');
    const selectHeaderText = document.querySelector('.photos-section h1');

    const pizzaBox = document.querySelector('.b-pz-glry');
    const pastaBox = document.querySelector('.b-ps-glry');
    const mgBox = document.querySelector('.b-mg-glry');
    const dessertBox = document.querySelector('.b-d-glry');


    pizzaPhotos.style.display = "grid";
    pizzaBox.style.textDecorationLine = "underline";
    pizzaBox.style.textDecorationColor = "var(--purple)";

    selectHeaderText.style.display = "none";

    pastaPhotos.style.display = "none";
    pastaBox.style.textDecorationLine = "none";
    pastaBox.style.textDecorationColor = "none";

    mgPhotos.style.display = "none";
    mgBox.style.textDecorationLine = "none";
    mgBox.style.textDecorationColor = "none";

    dessertPhotos.style.display = "none";
    dessertBox.style.textDecorationLine = "none";
    dessertBox.style.textDecorationColor = "none";
}

function showPastaPhotos() {
    const pizzaPhotos = document.querySelector('.pizza-photos');
    const pastaPhotos = document.querySelector('.pasta-photos');
    const mgPhotos = document.querySelector('.mg-photos');
    const dessertPhotos = document.querySelector('.dessert-photos');
    const selectHeaderText = document.querySelector('.photos-section h1');

    const pizzaBox = document.querySelector('.b-pz-glry');
    const pastaBox = document.querySelector('.b-ps-glry');
    const mgBox = document.querySelector('.b-mg-glry');
    const dessertBox = document.querySelector('.b-d-glry');

    selectHeaderText.style.display = "none";

    pizzaPhotos.style.display = "none";
    pizzaBox.style.textDecorationLine = "none";
    pizzaBox.style.textDecorationColor = "none";

    pastaPhotos.style.display = "grid";
    pastaBox.style.textDecorationLine = "underline";
    pastaBox.style.textDecorationColor = "var(--purple)";

    mgPhotos.style.display = "none";
    mgBox.style.textDecorationLine = "none";
    mgBox.style.textDecorationColor = "none";

    dessertPhotos.style.display = "none";
    dessertBox.style.textDecorationLine = "none";
    dessertBox.style.textDecorationColor = "none";

}

function showMgPhotos() {
    const pizzaPhotos = document.querySelector('.pizza-photos');
    const pastaPhotos = document.querySelector('.pasta-photos');
    const mgPhotos = document.querySelector('.mg-photos');
    const dessertPhotos = document.querySelector('.dessert-photos');
    const selectHeaderText = document.querySelector('.photos-section h1');

    const pizzaBox = document.querySelector('.b-pz-glry');
    const pastaBox = document.querySelector('.b-ps-glry');
    const mgBox = document.querySelector('.b-mg-glry');
    const dessertBox = document.querySelector('.b-d-glry');

    selectHeaderText.style.display = "none";

    pizzaPhotos.style.display = "none";
    pizzaBox.style.textDecorationLine = "none";
    pizzaBox.style.textDecorationColor = "none";

    pastaPhotos.style.display = "none";
    pastaBox.style.textDecorationLine = "none";
    pastaBox.style.textDecorationColor = "none";

    mgPhotos.style.display = "grid";
    mgBox.style.textDecorationLine = "underline";
    mgBox.style.textDecorationColor = "var(--purple)";

    dessertPhotos.style.display = "none";
    dessertBox.style.textDecorationLine = "none";
    dessertBox.style.textDecorationColor = "none";

}

function showDessertPhotos() {
    const pizzaPhotos = document.querySelector('.pizza-photos');
    const pastaPhotos = document.querySelector('.pasta-photos');
    const mgPhotos = document.querySelector('.mg-photos');
    const dessertPhotos = document.querySelector('.dessert-photos');
    const selectHeaderText = document.querySelector('.photos-section h1');

    const pizzaBox = document.querySelector('.b-pz-glry');
    const pastaBox = document.querySelector('.b-ps-glry');
    const mgBox = document.querySelector('.b-mg-glry');
    const dessertBox = document.querySelector('.b-d-glry');

    selectHeaderText.style.display = "none";

    pizzaPhotos.style.display = "none";
    pizzaBox.style.textDecorationLine = "none";
    pizzaBox.style.textDecorationColor = "none";

    pastaPhotos.style.display = "none";
    pastaBox.style.textDecorationLine = "none";
    pastaBox.style.textDecorationColor = "none";

    mgPhotos.style.display = "none";
    mgBox.style.textDecorationLine = "none";
    mgBox.style.textDecorationColor = "none";

    dessertPhotos.style.display = "grid";
    dessertBox.style.textDecorationLine = "underline";
    dessertBox.style.textDecorationColor = "var(--purple)";

}

var clicksElement = 0;

function sumaClick(index, nomEl) {
    if (JSON[index].value == true) {
        clicksElement = clicksElement + 1;
        JSON[index].value = false;
        document.getElementById(nomEl).style.backgroundColor = "yellow";
    } else {
        clicksElement = clicksElement - 1;
        JSON[index].value = true;
        document.getElementById(nomEl).style.backgroundColor = "white";
    }

    document.getElementById("ncarrito").innerHTML = clicksElement + " products";
}

var JSON = [
    {
        "img": "IMG/iphone.png",
        "nombre": "iPhone",
        "precio": "1000€",
        "value": true
    },
    {
        "img": "IMG/android.png",
        "nombre": "Android",
        "precio": "500€",
        "value": true
    },
    {
        "img": "IMG/altavoz.png",
        "nombre": "Altaveu no inteligent",
        "precio": "20€",
        "value": true
    },
    {
        "img": "IMG/altavozinteligente.png",
        "nombre": "Altaveu inteligent",
        "precio": "329€",
        "value": true
    },
    {
        "img": "IMG/auriculares.png",
        "nombre": "Auriculars",
        "precio": "60€",
        "value": true
    },
    {
        "img": "IMG/Airpods.png",
        "nombre": "Auriculars mágics",
        "precio": "100€",
        "value": true
    }
];

function generaProducto(tot, nProds) {

    var divCont = document.createElement('div');
    divCont.id="product" + nProds;
    divCont.setAttribute("onclick", "sumaClick("+nProds+",'"+divCont.id+"')");
    divCont.className = "divprod";

    var divTxt = document.createElement('div');
    divTxt.className = "txtprod";
    
    var img = document.createElement('img');
    img.setAttribute('src', tot.img);
    img.className = "imgprod";

    var h1nombre = document.createElement('div');
    h1nombre.innerHTML = tot.nombre;
    h1nombre.className = "nombre";

    var h2precio = document.createElement('div');
    h2precio.innerHTML = tot.precio;
    h2precio.className = "precio";

    document.getElementById("products").appendChild(divCont);
    divCont.appendChild(img);
    divCont.appendChild(divTxt);
    divTxt.appendChild(h1nombre);
    divTxt.appendChild(h2precio);

}

for (nProds = 0; nProds < JSON.length; nProds++) {
    generaProducto(JSON[nProds],nProds);
}

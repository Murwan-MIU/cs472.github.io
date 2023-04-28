window.onload = function(){

    getProducts();

    // Get the value of the "data" parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const dataString = urlParams.get('data');

// Parse the JSON string into an object
    const data = JSON.parse(decodeURIComponent(dataString));
    if(data){
        for(d of data){
        document.getElementById("noItems").style.display = "none";
        document.getElementById("divItemsList").style.display = "block";
        
        const row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(d.name));
        row.appendChild(cell);

        cell = document.createElement('td');
        cell.appendChild(document.createTextNode(d.price));
        row.appendChild(cell);

        cell = document.createElement('td');
        cell.appendChild(document.createTextNode(d.total));
        row.appendChild(cell);

        cell = document.createElement('td');

        const formDec = document.createElement('form');
        formDec.setAttribute("method", "get");
        formDec.setAttribute("action", "decrease.htm");

        const idFormDec = document.createElement("input");
        idFormDec.setAttribute("value", d.id);
        idFormDec.setAttribute("name", "idFormDec");
        idFormDec.setAttribute("type", "hidden");

    

        const sDes = document.createElement("button");
        sDes.setAttribute("type", "submit");
        sDes.setAttribute("value", "Submit");
        sDes.innerText = "-"

        formDec.appendChild(idFormDec);
        formDec.appendChild(sDes);

        cell.appendChild(formDec);

        cell.appendChild(document.createTextNode(d.quantity));

        const formInc = document.createElement('form');
        formInc.setAttribute("method", "get");
        formInc.setAttribute("action", "increase.htm");

        const idFormInc = document.createElement("input");
        idFormInc.setAttribute("value", d.id);
        idFormInc.setAttribute("name", "idFormInc");
        idFormInc.setAttribute("type", "hidden");

    

        const sInc = document.createElement("button");
        sInc.setAttribute("type", "submit");
        sInc.setAttribute("value", "Submit");
        sInc.innerText = "+"

        formInc.appendChild(idFormInc);
        formInc.appendChild(sInc);

        cell.appendChild(formInc);
        row.appendChild(cell);
    

        document.getElementById('tbodyItemsList').appendChild(row);
        }
    }

// Use the data in your code
    

}

async function getProducts() {
    const authToken = sessionStorage.getItem('authToken');
    const response = await fetch("http://localhost:3570/", {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
    });
    const jsonData = await response.json();
    console.log(jsonData);

    for (let e of jsonData) {
        addNewProductRowToTable(e.prodId, e.name, e.price, e.image, e.stock);
    }

}


function addNewProductRowToTable(id, name, price, image, stock) {

    const row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(name));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(price));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(image));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(stock));
    row.appendChild(cell);


    cell = document.createElement('td');

    const form = document.createElement('form');
    form.setAttribute("method", "get");
    form.setAttribute("action", "addTocart.htm");

    const idForm = document.createElement("input");
    idForm.setAttribute("value", id);
    idForm.setAttribute("name", "idForm");
    idForm.setAttribute("type", "hidden");

    const nameForm = document.createElement("input");
    nameForm.setAttribute("value", name);
    nameForm.setAttribute("name", "nameForm");
    nameForm.setAttribute("type", "hidden");

    const priceForm = document.createElement("input");
    priceForm.setAttribute("value", price);
    priceForm.setAttribute("name", "priceForm");
    priceForm.setAttribute("type", "hidden");

    

    const s = document.createElement("button");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    s.innerText = "Add to cart"

    form.appendChild(idForm);
    form.appendChild(nameForm);
    form.appendChild(priceForm);
    form.appendChild(s);

    cell.appendChild(form);
    row.appendChild(cell);
    

    document.getElementById('tbodyProductList').appendChild(row);

}
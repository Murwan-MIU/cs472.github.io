window.onload = function(){
    getProducts();

    document.getElementById('btnRegister').addEventListener('click', (event) => {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        data = postProduct(title, description, price);
    
        document.getElementById('title').innerHTML = data;
        document.getElementById('myform').reset();
    
    
    });

    
}


async function getProducts() {
    const response = await fetch("http://localhost:3000/products");
    const jsonData = await response.json();

    for (let e of jsonData) {
        addNewProductRowToTable(e.id, e.title, e.description, e.price);
    }

}





function addNewProductRowToTable(id, title, description, price) {

    const row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(id));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(title));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(description));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(price));
    row.appendChild(cell);


    cell = document.createElement('td');

    const form = document.createElement('form');
    form.setAttribute("method", "get");
    form.setAttribute("action", "update.htm");

    const idForm = document.createElement("input");
    idForm.setAttribute("value", id);
    idForm.setAttribute("name", "idForm");
    idForm.setAttribute("type", "hidden");

    const titleForm = document.createElement("input");
    titleForm.setAttribute("value", title);
    titleForm.setAttribute("name", "titleForm");
    titleForm.setAttribute("type", "hidden");

    const priceForm = document.createElement("input");
    priceForm.setAttribute("value", price);
    priceForm.setAttribute("name", "priceForm");
    priceForm.setAttribute("type", "hidden");

    const descriptionForm = document.createElement("input");
    descriptionForm.setAttribute("value", description);
    descriptionForm.setAttribute("name", "descriptionForm");
    descriptionForm.setAttribute("type", "hidden");

    const s = document.createElement("button");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    s.innerText = "Update"

    form.appendChild(idForm);
    form.appendChild(titleForm);
    form.appendChild(priceForm);
    form.appendChild(descriptionForm);
    form.appendChild(s);

    cell.appendChild(form);
    row.appendChild(cell);

    cell = document.createElement('td');
    const formDlt = document.createElement('form');
    formDlt.setAttribute("method", "get");
    formDlt.setAttribute("action", "delete.htm");

    const idFormDlt = document.createElement("input");
    idFormDlt.setAttribute("value", id);
    idFormDlt.setAttribute("name", "idForm");
    idFormDlt.setAttribute("type", "hidden");

    const sDlt = document.createElement("button");
    sDlt.setAttribute("type", "submit");
    sDlt.setAttribute("value", "Submit");
    sDlt.innerText = "Delete"

    formDlt.appendChild(idFormDlt);
    formDlt.appendChild(sDlt);
    cell.appendChild(formDlt);
    row.appendChild(cell);
    

    document.getElementById('tbodyProductList').appendChild(row);

}


async function postProduct(title, description, price) {
    let b = { "title": title, "description": description, "price": price }
    let setting = {
        method: 'POST',
        body: JSON.stringify(b),
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch("http://localhost:3000/products", setting);
    const jsonData = await response.json();
    return jsonData;
}



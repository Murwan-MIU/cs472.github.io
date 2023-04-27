window.onload = function(){
    var GET = {};
         var queryString = window.location.search.replace(/^\?/, '');
         queryString.split(/\&/).forEach(function(keyValuePair) {
             var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
             var paramValue = keyValuePair.replace(/^[^=]*\=/, ""); // some decoding is probably necessary
             GET[paramName] = paramValue;
         });
         
         document.getElementById('id').value = GET.idForm;
         document.getElementById('title').value = GET.titleForm;
         document.getElementById('price').value = GET.priceForm;
         document.getElementById('description').value = GET.descriptionForm.replaceAll('+', ' ');



        document.getElementById('btnUpdate').addEventListener('click', (event) => {
            const id = document.getElementById('id').value;
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const price = document.getElementById('price').value;
            data = updateProduct(id, title, description, price);
        
            document.getElementById('title').innerHTML = data;
            document.getElementById('myform').reset();
        
        
        });
       
}

async function updateProduct(productId, title, description, price) {
    let b = { "title": title, "description": description, "price": price }
    let setting = {
        method: 'PUT',
        body: JSON.stringify(b),
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch("http://localhost:3000/products/" + productId, setting);
    const jsonData = await response.json();
    return jsonData;
}
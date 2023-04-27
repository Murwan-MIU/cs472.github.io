window.onload = function(){
    var GET = {};
    var queryString = window.location.search.replace(/^\?/, '');

    queryString.split(/\&/).forEach(function(keyValuePair) {
        var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
        var paramValue = keyValuePair.replace(/^[^=]*\=/, ""); // some decoding is probably necessary
        GET[paramName] = paramValue;
    });
    deleteProduct(GET.idForm);
    

}
async function deleteProduct(id) {

    console.log(id);
    let setting = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await  fetch("http://localhost:3000/products/" + id, setting);
    
    const jsonData = await  response.json();
    window.location.href = "index.htm";
}

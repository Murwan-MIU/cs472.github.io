window.onload = function(){
    var GET = {};
    var queryString = window.location.search.replace(/^\?/, '');

    queryString.split(/\&/).forEach(function(keyValuePair) {
        var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
        var paramValue = keyValuePair.replace(/^[^=]*\=/, ""); // some decoding is probably necessary
        GET[paramName] = paramValue;
    });

    

    increment(GET.idFormInc);
    

}
async function increment(id) {
    const authToken = sessionStorage.getItem('authToken');
    const user = sessionStorage.getItem('user');

    let setting = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json' ,
            'Authorization': `Bearer ${authToken}`,
            'User': user
        },
    };
    console.log(setting.body);
    const response = await  fetch("http://localhost:3570/increase/" + id, setting);
    
    const jsonData = await  response.json();
    console.log(">>>>>>>>", jsonData);
    const url = `home.htm?data=${encodeURIComponent(JSON.stringify(jsonData))}`;
    window.location.href = url;
}

//permite comunicar el backend y fronend local
//const url = 'http://localhost:5000/api/';

//permite comunicar el backend y fronend en la nube
const url = 'https://backend256-00pz.onrender.com/api/';

function sendRequest(endPoin, method, data) {
    let request = new XMLHttpRequest();/*se utilizan para interactuar con los servidores. Puede recuperar datos de una URL sin tener que actualizar toda la página.*/
    request.open(method, url + endPoin);
    request.responseType = 'json'
    request.setRequestHeader('content-Type', 'application/json');
    request.send(data ? JSON.stringify(data) : data);
    return request
}

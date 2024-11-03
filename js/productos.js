function mostrarProductos() {
    let request = sendRequest('productos', 'GET', '');
    let table = document.getElementById('productos-table');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        //console.log(data);
        data.forEach(element => {
            table.innerHTML += `
        <tr>
 <td>${element.nombreprod}</td>
 <td>${element.costo}</td>
 <td>${element.precio}</td>
 <td>${element.cantidad}</td>


 <td>
 <button type = "button" class = "btn btn-primary" onclick = 'window.location ="/formProductos.html?id=${element._id}"'>Editar</button>
 <button type = "button" class = "btn btn-danger" onclick = 'deleteProductos("${element._id}")'>Eliminar</button>
</td>
 </tr>
        `
        });
    }
    request.onerror = function () {
        table.innerHTML = `
        <tr>
        <td colspan ="">Error al traer los datos</td>
        </tr>
          `
    }
}

function deleteProductos(id) {
    let request = sendRequest('productos/' + id, 'DELETE', '');
    request.onload = function () {
        mostrarProductos();
    }
}

function guardarProductos() {
    let nom = document.getElementById('nombreprod-n').value /*para ingresar*/
    let cos = document.getElementById('costo-a').value
    let pre = document.getElementById('precio-d').value
    let can = document.getElementById('cantidad-c').value
    let data = { 'nombreprod': nom, 'costo': cos, 'precio': pre, 'cantidad': can}
    let request = sendRequest('productos/', 'POST', data);/*para que muestre los datos ingresado y se puedan eliminar*/
    request.onload = function () {
        window.location = 'productos.html'; /*para redirigir a la pagina clientes*/
    }
    request.onerror = function () {
        alert("Error al guardar los datos")

    }
}

function cargarDatos(id) {
    let request = sendRequest('productos/' + id, 'GET', '');
    let nom = document.getElementById('nombreprod-n')/*para ingresar*/
    let cos = document.getElementById('costo-a')
    let pre = document.getElementById('precio-d')
    let can = document.getElementById('cantidad-c')
   

    request.onload = function () {
        let data = request.response;
        nom.value = data.nombreprod
        cos.value = data.costo
        pre.value = data.precio
        can.value = data.cantidad
        console.log(data)
    }
    request.onerror = function () {
        console.log("Error al cargar datos")
    }
}

function modificarProductos(id) {
    let nom = document.getElementById('nombreprod-n').value /*para ingresar*/
    let cos = document.getElementById('costo-a').value
    let pre = document.getElementById('precio-d').value
    let can = document.getElementById('cantidad-c').value
    let data = { 'nombreprod': nom, 'costo': cos, 'precio': pre, 'cantidad': can }
    let request = sendRequest('productos/'+id, 'PUT', data);/*para que muestre los datos ingresado y se puedan editar*/
    request.onload = function () {
        window.location = 'productos.html'; /*para redirigir a la pagina productos*/
    }
    request.onerror = function () {
        alert("Error al modificar los datos")

    }
}
function listarArchivos() {
    document.getElementById('main').innerHTML = "";
    document.getElementById('titulo').innerHTML = "Lista de archivos:";
    const url = 'http://localhost:3000/listarArchivos';
    fetch(url)
        .then(response => response.json())
        .then(data => {
        data.forEach(archivo => {
          const listItem = document.createElement('li');
          listItem.innerText = archivo.nombre;
          listItem.setAttribute('onclick', archivo.abrirFuncion);
          document.querySelector('#main').appendChild(listItem);
          console.log(listItem)
        });
    })
    .catch(error => {
        console.error(error);
    });
}

function abrirArchivo(nombreArchivo) {
    document.getElementById('titulo').innerHTML = "Vista de archivo:";
    const url = 'http://localhost:3000/verArchivos/' + nombreArchivo;
    console.log(url)
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.querySelector('#main').innerHTML = data;
    })
    .catch(error => {
        console.error(error);
        document.querySelector('#main').innerText = 'Error';
    });
}

function crearArchivos() {
    document.getElementById('main').innerHTML = "";
    document.getElementById('titulo').innerHTML = "Crear archivo:"
    document.querySelector('#main').innerHTML = `
      <form id="formularioCrearArchivo">
        <textarea id="contenidoArchivo" rows="10" cols="50"></textarea>
        <br>
        <input type="text" id="nombreArchivo">
        <br>
        <button type="submit">Crear Archivo</button>
      </form>
    `;
  
    const formulario = document.querySelector('#formularioCrearArchivo');
    formulario.addEventListener('submit', event => {
      event.preventDefault();
      const contenido = document.querySelector('#contenidoArchivo').value;
      const nombreArchivo = document.querySelector('#nombreArchivo').value;
      crearArchivo(contenido, nombreArchivo);
    });
}

function crearArchivo(contenido, nombreArchivo) {
    const url = 'http://localhost:3000/crearArchivo';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        contenido: contenido,
        nombreArchivo: nombreArchivo
    })
})
    .then(response => response.json())
    .then(data => {
        console.log(data.mensaje);
        document.querySelector('#main').innerHTML = "Archivo creado correctamente."
    })
    .catch(error => {
        console.error(error);
    });
}
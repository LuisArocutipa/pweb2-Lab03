function listarArchivos() {
    document.getElementById('main').innerHTML = "";
    const url = 'http://localhost:3000/listarArchivos';
    const titulo = document.createElement('h2');
    titulo.innerText = "Lista de archivos:";
    document.querySelector('#main').appendChild(titulo);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const listaElement = document.querySelector('#main');
  
        data.forEach(archivo => {
          const listItem = document.createElement('li');
          listItem.innerText = archivo.nombre;
          listItem.setAttribute('onclick', archivo.abrirFuncion);
          listaElement.appendChild(listItem);
          console.log(listItem)
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

function abrirArchivo(nombreArchivo) {
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

function mostrarArchivos(archivos) {
    const listaArchivos = document.getElementById('main');
    archivos.forEach((archivo) => {
        const listItem = document.createElement('li');
        listItem.textContent = archivo;
        listaArchivos.appendChild(listItem);
    });
  }

function verArchivos(){
    const url = 'http://localhost:3000/listarArchivos'
    fetch(url).then(
        response => response.json()
    ).then(
        data => mostrarArchivos(data.archivos)
    )
}
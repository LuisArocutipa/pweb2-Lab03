const fs = require('fs')
const path = require('path')
const express = require('express')
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();
const app = express()

app.use(express.static('pub'))
app.use(bp.json())
app.use(bp.urlencoded({
	extended: true
}))

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000")
});

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'))
});

app.get('/listarArchivos', (request, response) => {
  const directorioArchivos = './priv/';
  fs.readdir(directorioArchivos, (err, archivos) => {
    if (err) {
      console.error(err);
      response.status(500).json({ 
        error: 'Error'
      });
    } else {
      const listaArchivos = archivos.map(archivo => ({
        nombre: archivo,
        abrirFuncion: `abrirArchivo('${archivo}')`
      }));
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify(listaArchivos));
    }
  });
});

app.get('/verArchivos/:nombreArchivo', (request, response) => {
  const nombreArchivo = request.params.nombreArchivo;
  const rutaArchivo = 'priv/' + nombreArchivo;
  fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      response.status(500).json({ 
        error: 'Error' 
      });
    } else {
      const htmlText = md.render(data);
      response.setHeader('Content-Type', 'text/html');
      response.send(htmlText);
    }
  });
});

app.post('/crearArchivo', (request, response) => {
  const contenido = request.body.contenido;
  const nombreArchivo = request.body.nombreArchivo;
  const rutaArchivo = path.join(__dirname, 'priv', nombreArchivo)
  fs.writeFile(rutaArchivo, contenido, 'utf8', err => {
    if (err) {
      console.error(err);
      response.status(500).json({
        error: 'Error al crear el archivo'
      });
    } else {
      response.status(200).json({
        mensaje: 'Archivo creado correctamente'
      });
    }
  });
});

<div align="center">
<table>
    <theader>
        <tr>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">DEPARTAMENTO ACADÉMICO DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/abet.png?raw=true" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>

</table>
</div>

<div align="center">
<span style="font-weight:bold;">INFORME DE LABORATORIO</span><br />
</div>


<table>
<theader>
<tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
<tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 2</td></tr>
<tr><td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">Ajax y Node JS</td></tr>
<tr>
<td>NÚMERO DE PRÁCTICA:</td><td>03</td><td>AÑO LECTIVO:</td><td>2023 A</td><td>NRO. SEMESTRE:</td><td>III</td>
</tr>

<tr><td colspan="6">INTEGRANTES:
    <ul>
        <li><P>Luis Edgar Arocutipa Gutierrez</P></li>
    </ul>
</td>
</<tr>
<tr><td colspan="6">DOCENTES:
<ul>
<li>Carlo Corrales Delgado</li>
</ul>
</td>
</<tr>
</tdbody>
</table>

#

## EJERCICIOS PROPUESTOS
- En grupos de 3 a 5 personas implemente una aplicación web que navegue sobre archivos Markdown y permita:

    - Listas los archivos Markdown disponibles
    - Ver el contenido de un archivo Markdown traducido a HTML
    - Crear nuevos archivos MarkDown y almacenarlos en el servidor
- La comunicación entre el cliente y el servidor tiene que ser usando JSON sólamente. El cliente debe usar AJAX para sus peticiones El servidor debe usar NodeJS Su aplicación debe ser de página única, es decir que sólo habrá un archivo index.html y nada más.

- Si los enlaces proporcionado en esta guía no le son suficientes, puede revisar códigos en Internet que le ayuden con cosas como ejemplos: listar un directorio en NodeJS; pero deberá incluir los enlaces correspondientes en sus archivos como comentarios y sólo podrá usar código de stackoverflow, incluir código de cualquier otra fuente está prohibido y se considerará actitud deshonesta.


#

## SOLUCIÓN DE LOS EJERCICIOS PROPUESTOS
- Para la resolución del segundo laboratorio se creó el siguiente repositoiro en GitHub, en el que subió los archivos index.html y Ejercicios.js:
https://github.com/LuisArocutipa/pwebLab02
- Para la solución de este problema se instaló en primer lugar la biblioteca en javascript Markdown-It, y se usó para analizar y renderizar el lenguaje marcado Markdown en HTML, lo que nos permitió convertir texto escrito en Markdown a HTML de manera eficiente.
- Luego, se creó el archivo index.html dentro de una carpeta pub, en el cual se enlazó a un archivo javascript posteriormente creado funciones.js. En la parte de body se puso una barra de navegación para poder llamar a las funciones que se crearon para listar archivos y crear archivos. Finalmente, se creó un div en el cual iba a ir todo el contenido que se mostrara cada vez que se llamara a una función.
- En el archivo que usa Node JS (index.js), se creó el código para iniciar conexión con el servidor y se le indicó la ruta del archivo index.html. Luego se crearón las demás funcionalidades:  
    - listarArchivos, que busca dentro de una carpeta llamada priv (lugar donde se guardan los archivos creados) y en funciones.js se creó la función para que atraves de un foreach vaya listando y creando elementos html con el atributo onclick para que al presionarlo se llame a la función para ver el archivo.
    - verArchivos, el cual se llama al hacer click en el nombre de algún archivo listado llama a una método en funciones.js que en primer lugar obtiene la ruta del archivo a traves del atributo que se envió al momento de crear la lista y concatenandola con la dirección de la carpeta priv donde estan todos los archivos creados. Despues, se abre el archivo con fs.readFile() y se utiliza la función md.render() con la información que está dentro del archivo abierto. Finalmente se muestra en en archivo html.
    - crearArchivos, para la creación de archivos, primero se creó una función en el archivo funciones.js que permitiera crear un formulario en div, luego se uso addEventListener para obtener los datos enviados en el formulario y llamar a la función crearArchivos() que pide como argumentos el nombre del archivo y su contenido. Una vez enviada esa infomación se crea la ruta donde va a ir el archivo (dentro de la carpeta priv) y se usa fs.writeFile() para crear el archivo, si el proceso de creación de archivo fue exitoso se mostrará en pantalla.

#

## CUESTIONARIO
- En el Ejemplo "Hola Mundo" con NodeJS. ¿Qué pasó con la línea: "Content type ….."?
    - No se utiliza explícitamente el Content-Type porque la respuesta enviada es simplemente un texto plano ("Hola mundo"). Cuando no se especifica el Content-Type, el cliente que recibe la respuesta asumirá que el tipo de contenido es text/plain.
- En los ejercicios. ¿En qué lugar debería estar el archivo poema.txt?
    - El archivo peoma debería ir dentro de una carpeta llamada "priv", ya que en el momento en que ponemos la dirección del archivo que se quiere leer usando "fs.ReadFile()" se especifica que la ruta es "priv/poema".
- ¿Entiende la expresión regular en el código y se da cuenta de para qué es útil?
    - La mayor parte del código es entendible y más poniendolo en práctica y creando archivos para probar diferentes funcionalidades, y en caso haya alguna parte del código que no se entienda lo que hago es buscar información en stackoverflow o videos en youtube.
- Note que la respuesta del servidor está en formato JSON, ¿Habrá alguna forma de verla directamente?
    - Buscando información acerca de esta pregunta, encontre que sí hay otras maneras para poder ver la respuesta del servidor sin usar el formato JSON, como por ejemplo usar aplicaciones o herramientas de prueba de API. Otro método sería utilizando la linea de comandos cURL en el terminal o utilizando el navegador web e ingresando al servidor, "http://localhost:3000" en este caso.

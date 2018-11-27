# LM
Lenguaje de marcas / Joan Manera Perez / 1º DAM

## Estructura minima de una web
```html
<!DOCTYPE html>
<html>
<head>
  
</head>
<body>

</body>
</html>
```

## Explica las 3 formas de usar CSS en HTML
-La primera es poniendo el codigo en la misma etiqueta utilizando el atributo "span". Ej:
```html
<p>¡Hola <span style="color:#FF0000">amigo lector</span>!</p>
```
-La segunda es poniendo el codigo dentro de la cabecera del documento con la etiqueta "style". EJ:
```html
<html>
<head>
    <title>Título de la página</title>
    <style type="text/css">
        div {
            background:#FFFFFF;
        }
    </style>
</head>
...
```
-La tercera y ultima es la mas recomendable y es la que mas se utiliza. Esta consiste en crear un fichero .css aparte del html y en la cabecera poner un "link" para enlazar los dos archivos. Ej:
```html
<head>
  <link rel="stylesheet" type="text/css" href="index.css" />
</head>
```
  En "href" ponemos la ruta donde esta el fichero .css que le dara formato a la web.
  
## Crea una lista sin ordenar con 5 ingredientes de una receta de cocina
```html
<!DOCTYPE html>
<html>
<head>
	<title>Lenguaje de marcas</title>
</head>
<body>
	<h1>Lista sin ordenar</h1>
	<ul>
		<li>UNo</li>
		<li>Dos</li>
		<li>Tres</li>
		<li>Cuatro</li>
	</ul>
</body>
</html>
```

## Como se puede incluir javascript en HTML
-Para introducir codigo javascript en HTML, lo podemos hacer poniendo la etiqueta "script" en la cabecera o en el cuerpo. Se recomienda ponerlo en la cabecera para mantenerlo separado del contenido del HTML, pero si lo ponemos en el cuerpo, puede mejorar la velocidad de la web.
Ej1:
```html
<!DOCTYPE html>
<html>
<head>
	<script>
		var time = new Date();
		console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
	</script>
</head>
<body>

</body>
</html>
```
Ej2:
```html
<!DOCTYPE html>
<html>
<head>
	
</head>
<body>
	<script>
		var time = new Date();
		console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
	</script>
</body>
</html>
```
Este script muestra la hora actual.
-Al igual que el CSS, tambien podemos crear un archivo separado del HTML con la extension .js y poner una etiqueta en el HTML para agregar el codigo de JavaScript.
Ej:
```html
<!DOCTYPE html>
<head>
	<title>Time right now:</title>
</head>
<body>
</body>
	<script src="js/myscript.js"></script>
</html>
```
Y el contenido del fichero myscript.js seria:
```html
let d = new Date();
document.body.innerHTML = "<h1>Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()</h1>"
```

## ¿Que diferencia hay entre una clase y una ID?
-El valor del atributo ID de un elemento es único; es decir, no debería haber otro elemento con el mismo nombre de identificador (ID) dentro del documento HTML. En el fichero CSS, se pondria "#unico{...}" para darle formato.
```html
<div id="unico">Lenguaje de marcas</div>
```


-A diferencia del atributo ID, class si que puede ser utilizado en mas de un elemento del documento HTML. En el fichero CSS, se pondria ".rojo{...}" para darle formato.
```html
<div class="rojo">Lenguaje de marcas</div>
```

## Código para hacer un enlace a otra página y que esta se abra en una nueva ventana
```html
<a href="pagina.html" target="_blank">Título del enlace</a>
```

## ¿Qué son las pseudoclases?, pon ejemplos.
-Una pseudoclase CSS es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado. Por ejemplo,  :hover aplicará un estilo cuando el usuario haga hover sobre el elemento especificado por el selector.
Pseudoclases: :active, :checked, :default, :dir(), :disabled, :empty, :enabled, :first, :first-child, :first-of-type, :fullscreen, :focus, :hover, :indeterminate...


## Explica el modelo de caja de CSS (margin, border y padding)



## Explica que son los selectores de CSS y pon ejemplos

## Di a quien afectan:

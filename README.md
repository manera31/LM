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
-La primera es poniendo el codigo en la misma etiqueta utilizando el atributo "span". 

Ej:
```html
<p>¡Hola <span style="color:#FF0000">amigo lector</span>!</p>
```
-La segunda es poniendo el codigo dentro de la cabecera del documento con la etiqueta "style". 

Ej:
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
-La tercera y ultima es la mas recomendable y es la que mas se utiliza. Esta consiste en crear un fichero .css aparte del html y en la cabecera poner un "link" para enlazar los dos archivos. 

Ej:
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
		<li>Agua</li>
		<li>Harina</li>
		<li>Sal</li>
		<li>Aceite</li>
		<li>Huevos</li>
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
-Cuando creamos una etiqueta, por ejemplo un div, esta tiene un ancho y un alto segun el contenido que le metas dentro. Pero nosotros podemos modificar este ancho y este alto utilizando "width" y "high", asi la etiqueta tendra una forma asignada. Sin hacer nada mas, la pagina mostrara el div pegado en la parte superior izquierda. 

*TODOS LOS CAMBIOS SE HACEN DESDE EL CSS*
### Margin
Si le ponemos un margin de 10 pixeles, el div mantendra una separación de 10 pixeles por el lado donde le has puesto el margin. 

Ej: Si ponemos "margin-top: 10px;", guardaremos 10 pixeles de separacion por arriba. Lo mismo con bottom, left y right. Tambien lo podemos poner con el formato "margin: 10px, auto", que este guardara 10 pixeles por arriba y por abajo y centrara el div por la derecha y por la izquierda ya que le hemos puesto auto. Otra forma seria "margin: 10px, 20px, 30px, 40px;", que guardaria 10 pixeles por arriba, 20 por la derecha, 30 por abajo y 40 por la izquiera, como las agujas del reloj.
### Border
Cuando le ponemos un borde a una etiqueta, esta se verá en la página recubierta por una linea normalmente mas gruesa. Para hacer esto tenemos que poner "border: solid 2px;", y nos pondria un porde de tipo solido (una linea continua) con un grosor de 2 pixeles. Tambien podriamos poner "border: dashed 2px;", que nos pondria un borde con una linea discontinua y con un grosor de 2 pixeles. Existe la posibilidad de poner el borde solo a un lado como "border-left: solid 2px;", pondria un borde a la izquierda de tipo solido con 2 pixeles de grosor.
### Padding
El padding es parecido al margin; mientras que en el margin separas la etiqueta de la pagina, en el padding separas el conenido de la etiqueta respecto la misma etiqueta. Ej: Tenemos una etiqueta div con un texto, y le ponemos a esta etiqueta "padding: 10px;", guardaria un espacio de 10 pixeles por todos los lados dentro del div. Tambien funciona el padding-top, bottom, left y right.

A esto le tenemos que sumar el ancho y el alto de la etiqueta, los bordes y el padding. Ej: Tenemos un div con una anchura y una altura de 500 pixles, tiene un padding por todos los lados de 30 pixeles y tiene un borde solido de 2 pixeles, finalmente tendría un ancho y un alto de 2+30+500+30+2 = 564 pixeles.


## Explica que son los selectores de CSS y pon ejemplos
-Existen otras reglas que pueden ser utilizadas para crear selectores que permiten un mayor nivel de especificidad en cuanto a los elementos HTML a los cuales se les desea aplicar determinada regla de estilo.
```html
div, p - Selecciona todos elementos <div> y todos elementos <p>
div p - Selecciona todos elementos <p> dentro de los elementos <div>
div > p - Selecciona todos elementos <p> que son descendientes directos del elemento <div>
div + p - Selecciona todos elementos <p> que estan situados inmediatamente despues del elemento <div>
p ~ ul - Selecciona todos elementos <ul> que estan precedidos del elemento <p>
```


## Di a quien afectan:

p a { color: red; - A nada ya que no se cierran los corchetes "}". Pero si estubieran cerrados afectaria a todos los enlaces que estan dentro de un parrafo poniendoles el color de la letra en rojo.


p > a { color: red; } - A todos los enlaces que descienden directamente de un parrafo les pone el color de la letra en rojo.


h1 + h2 { color: red } - Funcionaria pero se debe de poner ";" despues de cada linea. Les cambiaria el color de la letra a rojo a todos los h2 que estan situados inmediatamente despues que los h1.


a[class] { color: blue; } - Se muestran de color azul todos los enlaces que tengan un atributo "class", independientemente de su valor.


a[class="externo"] { color: blue; } - Se muestran de color azul todos los enlaces que tengan un atributo "class" con el valor "externo".


a[href="http://www.ejemplo.com"] { color: blue; } - Se muestran de color azul todos los enlaces que apunten al sitio "http://www.ejemplo.com"

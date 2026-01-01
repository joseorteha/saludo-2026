# Feliz Año Nuevo 🎄

> This README is in Spanish because the content of the website is in Spanish.😂 Simple reason, right?

El código es simple y es creado con Vite + React + TS + Tailwind CSS

Este es el sitio web: [Feliz Año Nuevo](https://ahappynewyear.vercel.app) y es fácil de adaptarlo para poder regalarle un **Feliz Año Nuevo** a cualquier persona.

## Cambios para adaptar el contenido
Hay dos opciones:

### Fácil
1- Hay un formulario en la página principal donde deberás poner el nombre del destinatario y el nombre de quién lo manda, igual se puede cambiar por cualquier texto como: "Tu mejor amigo", "Tu amor". Luego pinchará en el botón de compartir y se copiará el enlace generado.

### Más Complejo
2- Debes cambiar/agregar en la URL algunos parámetros:
* ```n``` o ```name```: para poner la persona que lo va a recibir. En caso de no ponerlo automáticamente se pondrá la palabra *"Amig@"*
* ```a``` o ```author```: se debe cambiar porque por defecto pondrá Anónimo

#### Ejemplo 
 
* ```https://ahappynewyear.vercel.app?n=amigo%20especial&a=autor%20especial```
* ```https://ahappynewyear.vercel.app?name=amigo%20especial&author=autor%20especial```
* Primeramente antes de los parámetros es importante poner el signo de cierre de interrogación ```?``` y separar los parámetros mediante ```&```, siendo algo así ```?n=destinatario&a=remitente```

> (no hace falta poner %20 para separar en la URL)

**Recuerda que tiene música también 😉**

> [!NOTE]
> Este código se encuentra en [Git Hub](https://github.com/alejandrobolano/New-Year)

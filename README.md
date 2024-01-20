# NgrxExample

Este proyecto fue creado con la version 14.2.2 de Angular.

# Aplicación TODO con NgRx

Este documento proporciona instrucciones detalladas para la instalación de dependencias y la configuración de la ruta de la API para la aplicación. Asegúrese de seguir cada paso cuidadosamente para garantizar una configuración adecuada.

## 1. Instalar Dependencias

Ejecute el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```
## 2. Modificar ruta de la API

Originalmente la ruta de la API es http://localhost:3000/api/todo y lo puedes encontrar en el archivo enviroment.prod.ts, pero esto va en relación a el puerto que ejecutes en el servidor de backend, por ejemplo si cambias el puerto deberías modificarlo a tu manera, otro problema que puede surgir es con el localhost, podrías reemplazarlo de las siguientes maneras:
    
1. http://127.0.0.1:3000/api/todo
2. http://ip.de.la.pc:3000/api/todo

## 3. Ejecutar la Aplicación
Ahora que ha instalado las dependencias y configurado la ruta de la API, puede ejecutar la aplicación. Utilice el siguiente comando:
```bash
ng serve
```
por defecto esto se ejecutará en el puerto 2000, pero si deseas ejecutarlo en un puerto en específico puedes usar el siguiente comando:

```bash
ng serve --port=4201
```
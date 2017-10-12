# APP PROYECTO DELBARRIO.PROVIDENCIA.CL


v1.0

Se consideran las siguientes tecnologías para el desarrollo del cliente REST.

* Vuejs 2.4.2
* Node 8+
* Vue-router 2.7.0
* Axios 0.16.2

* Test: Karma 1.4 | Mocha 3.2 | Chai 4.1

### Caracteristicas consideradas:
* Separación de componentes en estructura de carpetas
* Vista por componente
* Lógica separada de componentes
* Validaciones por modelo junto a controladores
* Permisos de ruta por JWT -> LocalStorage + SessionStorage
* Formato establecido para descripciones de métodos

___________________________________________________________________________
## INSTALACION  ##

(Ver Documentación API)


___________________________________________________________________________
## EJECUCION ENTORNO DE DESARROLLO  ##

Para ejecutar el entorno de Desarrollo fue considerado el uso de contenedores en Docker, actualmente fue solamente considerado una instancia de PostgreSQl para gestionar la base de datos.

1.- Instalación y Pre-Requisitos para instalar Docker-Compose`: 
	* [Procedimeinto de instalación](https://docs.docker.com/compose/install/#prerequisites)  

2.- Estructura de carpetas`:  Se considero el uso de la siguiente estructura 
	
```
│   ├── FUENTES
│   └── APIv1
│       ├── README.md
│       ├── app
│       ├── config.js
│       ├── index.js
│       ├── log
│       ├── main.js
│       ├── node_modules
│       ├── package.json
│       ├── test
│       └── yarn.lock
├── docker-compose.yml
├── publicApi
├── publicData
└── publicWww
```
Donde:

* FUENTES				:  Corresponde a la carpeta donde se encuentra el Código fuente de la Aplicación y de la API	

* docker-compose.yml    :  Archivo de configuración YAML, donde se definiden los servicios, redes y Volúmenes. [Más información](https://jsitech1.gitbooks.io/meet-docker/content/archivo_docker-compose_en_detalle.html)  

* publicApi				: Carpeta donde se aloja la versión en ejecución de la API, de esta carpeta se sirve el servicio de docker que levanta una instancia de Node

* publicData			: Carpeta que contiene los archivos fisicos de la Base de Datos 

* publicWww				: Carpeta que contiene los archivos del servidor Web utilizado


___________________________________________________________________________
## DEFINICION DE METODOS HTTP UTILIZADOS EN LA API ##
* GET:      Consultar y leer recursos
* POST:     Permite crear un nuevo recurso
* PUT:      Permite editar un recurso
* DELETE:   Elimina un recurso  
* PATCH:    Permite editar partes concretas de un recurso, recibe los datos mediante x-www-form-urlencode


___________________________________________________________________________
## TEST  ##
Se considera test a las rutas expuestas, para esto se utilizan los módulos 'mocha', 'chai' y 'axios'. Los test deben ser generados en la carpeta test como se muestra a continuación
```
│   └── APIv1
│       ├── test
│       	├── persona.js
```
* Los test se ejecutan con el comando npm test / yarn test

___________________________________________________________________________
## INFORMACION GENERAL  ##

* [Código de Estado de HTTP](http://librosweb.es/tutorial/los-codigos-de-estado-de-http/)  

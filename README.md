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
│   ├── build
│   ├── config
│   ├── node_modules
│   └── src
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
├── static
├── test
├── index.html
├── package.json
└── ---
```



___________________________________________________________________________
## DEFINICION DE METODOS HTTP UTILIZADOS EN LA API ##
* GET:      Consultar y leer recursos
* POST:     Permite crear un nuevo recurso
* PUT:      Permite editar un recurso
* DELETE:   Elimina un recurso  
* PATCH:    Permite editar partes concretas de un recurso


___________________________________________________________________________
## TEST  ##

*Pendiente*
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
* Utilización de ES6

___________________________________________________________________________
## INSTALACION  ##

(Ver Documentación API)


___________________________________________________________________________
## EJECUCION ENTORNO DE DESARROLLO  ##


1.- Estructura de carpetas`:  Se considero el uso de la siguiente estructura 
	
```
│   ├── build
│   ├── config
│   ├── node_modules
│   └── src
│       ├── assets
│       ├── components
│       ├── router
│       ├── App.vue
│       └── main.js
├── static
├── test
├── index.html
├── package.json
└── ---
```

Donde:

* src					:  Carpeta donde se encuentra el código fuente de la aplicación	

* static			    :  Carpeta en la cual se encuentran elementos estáticos como .css y plugins .js que no corresponden a módulos npm

* index.html			:  Archivo base donde se cargan elementos estáticos como las hojas de estilo .css, jquery y otros. Tiene el contenedor con id #app dentro del cual occurre la ejecución de la aplicación

* config				:  Carpeta que contiene los archivos de configuración para entornos productivos y de desarrollo

* components			:  Carpeta que contiene los módulos o "Componentes" de la aplicación


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
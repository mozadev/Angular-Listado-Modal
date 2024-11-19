

<h1> 🌟 Estructura</h1>

```
src/
├── app/
│   ├── anexos/                  
│   │   ├── interfaces/
│   │   │   ├── anexo.interface.ts
│   │   │   └── anexoDetail.interface.ts
│   │   ├── pages/
│   │   │   ├── anexo-detail/   
│   │   │   └── list-page/      
│   │   ├── services/
│   │   │   └── anexos.service.ts
│   │   ├── anexos-routing.module.ts
│   │   └── anexos.module.ts
│   ├── material/                
│   │   └── material.module.ts
│   ├── shared/                  
│   │   ├── pages/
│   │   │   └── error404-page/
│   │   └── shared.module.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
├── environments/
└── styles.css

```





<h1> 🎨 Instalacion</h1>

1. Clonar el proyecto

```
git clone https://gitlab.com/AutoATCORP/bots_frontend.git

```
2. Entrar al proyecto

```
cd bots_frontend
```

2. Instala las dependencias 

 ```
 npm install
 
 ```
 <h1> Configuracion </h1>

 Agregar un archivo  ```environments.ts``` dentro de la directorio (src/environments) y define las variables necesarias. Ejemplo:

```
export const environments = {
    baseUrl: 'http://10.100.10.100:1000',
    apiUsername: 'fsfds',
    apiPassword: 'fsfsf'
}

```

<h1> 🏗 Ejecución</h1>
Para ejecutar la aplicacion desde la linea de comandos 

 ```
 npm start
 
 ``` 
 o bien
 
  ```
  ng serve -o
  
  ```


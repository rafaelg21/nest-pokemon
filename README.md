<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
 ```
 yarn install
 ```
3. Tener Nest CLI instalado 
```
npm i -g @nestjs/cli
```

4. Lenvantar la Base de Datos
```
docker-compose up -d
```

5. Clonar el archivo ```.env.templatey``` renombrar la copia a ```.env```

6. Lenar las variables de entonos definidas en el ```.env```

7. Ejecutar la aplicacion en dev: 
```
yarn start:dev
```

8. Reconstrir la BD con las semillas
```
http://localhost:3000/api/v2/seed
```


## Stak usado

* MongoDB
* Nest







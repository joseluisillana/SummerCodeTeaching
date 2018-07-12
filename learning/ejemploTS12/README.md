Para hacer funcionar éste módulo hay que hacer cosas exta:

Éste módulo está pensado para levantarse en un servidor http stático,
para ello usa http-server, además para cargar los módulos de TypeScript, utiliza SystemJS.

Para ejecutarlo:

Ejecutar:

```
$ npm install
```

Después instalar http-server local o globalmente

```
$ sudo npm install http-server -g
```

Poner a compilar el TypeScript:

```
$ tsc -w
```

Y ejecutar el proyecto, desde dentro del directorio:
```
$ http-server
```


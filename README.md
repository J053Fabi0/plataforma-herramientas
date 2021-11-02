# Estructura del proyecto

```
.
└── /src
    ├── /assets
    ├── /components
    ├── /utils
    ├── /views
    ├── /styles
    ├── index.js
    └── App.js
```

### `assets`
Fotos, logotipos, archivos, videos, etc.


### `components`
Componentes que se pueden ocupar globalmente, genéricos.

El `index.js` es para poder importar los componentes en una sola línea:
`import { TextField, Select, Radio } from '@components'`

El `index.js` seguirá esta estructura:
```
import { TextField } from './TextField/TextField'
import { Select } from './Select/Select'
import { Radio } from './Radio/Radio'

export { TextField, Select, Radio }
```


### `utils`
Funciones globales que hacen cosas muy genéricas, fáciles de reutilizar en diversos contextos.


### `views`
Todas las páginas del sitio. Ej: El home o la de Contacto.


### `styles`
Todos los archivos que exporten objetos que se puedan ocupar luego con emotion/styled.

```js
import Colors from '@styles/colors';

export default {
  checkBox: {
    display: "flex"
  }
}
```

#### mixins.js
Son pequeños componentes de emotion/styled que se pueden ocupar en donde sea.

### Créditos

Basé la estructura en este blog: <https://www.taniarascia.com/react-architecture-directory-structure>

# Librerías ocupadas

## emotion/styled
Es para darle estilo a los elementos de React sin las desventajas o líos de usar archivos CSS, ni la pérdida en preformance al usar CSS inline.

Resumen de toda la sintaxis: <https://emotion.sh/docs/styled>.

Cómo aplicar un tema: <https://emotion.sh/docs/theming>.

Una introducción práctica: <https://mauriciogc.medium.com/react-formas-de-dise%C3%B1ar-componentes-de-react-desde-estilos-en-l%C3%ADnea-hasta-css-in-js-5cafe15b13fa#be17>. Esa es una gran página que muestra un resumen de muchas formas de crear estilos en React, de las cuales he creído más apropiado emotion/styled.

## `react-app-rewired` y `react-app-rewired-alias`

Es para ocupar alias y pasar de

```js
import Button from "../../../../components/Button/Button"
```

a

```js
import Button from "@components/Button/Button"
```

He aquí el tutorial que lo explica: <https://medium.com/how-to-react/create-path-aliases-in-react-js-1256550c7d52>

## React Bootstrap

Documentación: <https://react-bootstrap.github.io/components/alerts>.

## React Bootstrap Icons
Con esta librería se pueden ocupar los íconos de Bootstrap.

Para usar un ícono lo importas así:

```js
import { ArrowRight } from 'react-bootstrap-icons';
```

Para saber qué íconos existen, búscalos en <https://icons.getbootstrap.com#icons>.

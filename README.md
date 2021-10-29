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
Todos los archivos que exporten objetos que se puedan ocupar luego con JSS.

```js
import Colors from '@styles/colors';

export default {
  checkBox: {
    display: "flex"
  }
}
```

#### mixins.js
<https://jarombek.com/blog/jun-30-2021-react-jss#mixins-for-reusable-styles>

### Créditos

Basé la estructura en este blog: <https://www.taniarascia.com/react-architecture-directory-structure>

# Librerías ocupadas

## JSS
Resumen de toda la sintaxis: <https://cssinjs.org/jss-syntax>.

Introducción práctica muy explicativa: <https://www.digitalocean.com/community/tutorials/how-to-style-react-components>

Otro tutorial: <https://jarombek.com/blog/jun-30-2021-react-jss>

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

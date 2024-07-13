React + TypeScript + Vite
Este proyecto proporciona una configuración mínima para trabajar con React en Vite, aprovechando el HMR (Hot Module Replacement) y algunas reglas ESLint configuradas.

Plugins Oficiales
Actualmente, hay dos plugins oficiales disponibles:

@vitejs/plugin-react utiliza Babel para Fast Refresh.
@vitejs/plugin-react-swc utiliza SWC para Fast Refresh.
Ampliando la Configuración ESLint
Si estás desarrollando una aplicación de producción, te recomendamos actualizar la configuración para habilitar reglas de lint tipo consciente:

Configura la propiedad parserOptions en el nivel superior así:

js
Copiar código
export default {
// otras reglas...
parserOptions: {
ecmaVersion: 'latest',
sourceType: 'module',
project: ['./tsconfig.json', './tsconfig.node.json'],
tsconfigRootDir: \_\_dirname,
},
}
Reemplaza plugin:@typescript-eslint/recommended con plugin:@typescript-eslint/recommended-type-checked o plugin:@typescript-eslint/strict-type-checked.

Opcionalmente, agrega plugin:@typescript-eslint/stylistic-type-checked.

Instala eslint-plugin-react y agrega plugin:react/recommended y plugin:react/jsx-runtime a la lista extends.

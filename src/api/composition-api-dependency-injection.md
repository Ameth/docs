# Composition API: <br>Inyección de Dependencias

## provide()

Proporciona un valor que puede ser inyectado en los componentes hijos.

- **Tipo**

  ```ts
  function provide<T>(key: InjectionKey<T> | string, value: T): void
  ```

- **Detalles**

  `provide()` lleva dos argumentos: la key, que puede ser un string o un symbol, y el valor a ser inyectado.

  Cuando se usa con Typescript, la key puede ser un symbol casteado como `InjectionKey` - un tipo provisto por Vue que extiende de `Symbol`, que puede ser usado para chequear el tipo del valor entre `provide()` y `inject()`.

  Similar a las APIs de los hooks del ciclo de vida, `provide()` debe ser llamado en forma sincrónica durante la ejecución de la función `setup()`.

- **Ejemplo**

  ```vue
  <script setup>
  import { ref, provide } from 'vue'
  import { fooSymbol } from './injectionSymbols'

  // Uso con valor estático
  provide('foo', 'bar')

  // Uso con valor reactivo
  const count = ref(0)
  provide('count', count)

  // Uso con Symbol
  provide(fooSymbol, count)
  </script>
  ```

- **Ver también:**:
  - [Guía - Provide / Inject](/guide/components/provide-inject.html)
  - [Guía - Escritura de Provide / Inject](/guide/typescript/composition-api.html#escritura-de-provide-inject)

## inject()

Inyecta un valor provisto por un componente padre o por la aplicación (vía `app.provide()`).

- **Tipo**

  ```ts
  // sin valor por defecto
  function inject<T>(key: InjectionKey<T> | string): T | undefined

  // con valor por defecto
  function inject<T>(key: InjectionKey<T> | string, defaultValue: T): T

  // con factory
  function inject<T>(
    key: InjectionKey<T> | string,
    defaultValue: () => T,
    treatDefaultAsFactory: true
  ): T
  ```

- **Detalles**

  El primer argumento es la key de inyección. Vue inspeccionará la cadena de padres con el fin de encontrar un valor que coincida con la key provista. Si múltiples componentes en la cadena proveen la misma key, el más cercano al componente que solicita el valor "hará sombra" a los que estén más arriba en la cadena. Si no se encuentra ningún valor con esa key, `inject()` retornará `undefined` a menos que se use un valor por defecto.

  El segundo argumento es opcional y es el valor por defecto que será utilizado cuando no se encuentre un valor con la key proporcionada. Tmbién puede ser una función factory, para retornar valores que son costosos de crear. Si el valor por defecto es una función, entonces hay que usar `false` como tercer argumento para indicar que la función debe ser usada como un valor en lugar de como una factory.

  Similar a las APIs de los hooks del ciclo de vida, `inject()` debe ser llamado en forma sincrónica durante la ejecución de la función `setup()`.

  Cuando se usa con Typescript, la key puede ser del tipo `InjectionKey` - un tipo provisto por Vue que extiende de `Symbol`, que puede ser usado para chequear el tipo del valor entre `provide()` y `inject()`.

- **Ejemplo**

  Asumiendo que el componente padre ha proporcionado los valores que se mostraron en el ejemplo anterior sobre el método `provide()`:

  ```vue
  <script setup>
  import { inject } from 'vue'
  import { fooSymbol } from './injectionSymbols'

  // inyección de un valor estático con default
  const foo = inject('foo')

  // inyección de un valor reactivo
  const count = inject('count')

  // inyección de un valor a través de un Symbol
  const foo2 = inject(fooSymbol)

  // inyección con un valor por defecto
  const bar = inject('foo', 'default value')

  // inyección con una factory como valor por defecto
  const baz = inject('foo', () => new Map())

  // inyección con una función como valor por defecto, usando el tercer argumento
  const fn = inject('function', () => {}, false)
  </script>
  ```

- **Ver también:**:
  - [Guía - Provide / Inject](/guide/components/provide-inject.html)
  - [Guía - Escritura de Provide / Inject](/guide/typescript/composition-api.html#escritura-de-provide-inject)

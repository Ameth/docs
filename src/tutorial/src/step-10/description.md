# Watchers

Hay ocasiones en las que podemos necesitar la ejecución de "efectos secundarios" de forma reactiva - por ejemplo, mostrar un número en la consola cada vez que cambie. Esto lo podemos conseguir con los watchers (*observadores*):

<div class="composition-api">

```js
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newCount) => {
  // sí, console.log() es un efecto secundario
  console.log(`La nueva cuenta es: ${newCount}`)
})
```

`watch()` puede observar directamente a una ref, y el callback se dispara cada vez que el valor de `count` cambia. `watch()` también puede observar otros tipos de fuentes de datos - más detalles en la <a target="_blank" href="/guide/essentials/watchers.html">Guía - Watchers</a>.

</div>
<div class="options-api">

```js
export default {
  data() {
    return {
      count: 0
    }
  },
  watch: {
    count(newCount) {
      // sí, console.log() es un efecto secundario
      console.log(`La nueva cuenta es: ${newCount}`)
    }
  }
}
```

En este caso, estamos utilizando la opción `watch` para observar los cambios en la propiedad `count`. The watch callback is called when `count` changes, and receives the new value as the argument. Más detalles son abordados en la <a target="_blank" href="/guide/essentials/watchers.html">Guía - Watchers</a>.

</div>

Un ejemplo más práctico que registrar en la consola sería obtener nuevos datos cuando un ID cambia. El código que tenemos está obteniendo datos de tareas desde una API de prueba cuando se monta el componente. Hay también un botón que incrementa el ID de la tarea que debe ser obtenida. Intenta implementar un observador que obtenga una nueva tarea cuando se pulse el botón.

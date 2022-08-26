# Slots

Además de pasar datos a través de props, el componente padre también puede pasar fragmentos de plantilla al hijo a través de **slots** (*ranuras*):

<div class="sfc">

```vue-html
<ChildComp>
  ¡Esto es un contenido de slot!
</ChildComp>
```

</div>
<div class="html">

```vue-html
<child-comp>
  This is some slot content!
</child-comp>
```

</div>

En el componente hijo, este puede renderizar el contenido de la ranura del padre utilizando el elemento `<slot>` como punto de salida:

<div class="sfc">

```vue-html
<!-- en la plantilla hija -->
<slot/>
```

</div>
<div class="html">

```vue-html
<!-- en la plantilla hija -->
<slot></slot>
```

</div>

El contenido dentro del punto de salida `<slot>` será tratado como contenido "fallback"  (*de respaldo*): se mostrará si el padre no pasó ningún contenido de slot:

```vue-html
<slot>Contenido de respaldo</slot>
```

Actualmente no estamos pasando ningún contenido de slot a `<ChildComp>`, así que deberías ver el contenido de respaldo. Vamos a proporcionar algún contenido de slot al hijo aprovechando el estado `msg` del padre.

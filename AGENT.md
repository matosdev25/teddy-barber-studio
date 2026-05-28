# AGENT.md — Teddy Barber Studio

## Instrucciones del proyecto

Este proyecto es una landing page premium para Teddy Barber Studio, barbería ubicada en Margarita, Plaza El Sol, Panamá.

Prioridades del diseño:

1. Vender membresías mensuales.
2. Agendar por WhatsApp.
3. Transmitir barbería premium, moderna y exclusiva.
4. Mantener una experiencia responsive, elegante y fácil de modificar.

Usar como referencia visual obligatoria las imágenes dentro de:

```txt
/ref
```

La estética debe mantenerse cercana a esas referencias:

- Fondo negro/carbón.
- Detalles dorados y naranja.
- Cards oscuras con bordes dorados sutiles.
- Brillos/glow elegantes.
- Secciones amplias, limpias y comerciales.
- Tipografía grande, moderna y con jerarquía fuerte.
- Botones dorados/naranja.
- Sensación de membresía VIP y barbería de lujo.

No crear una landing genérica. El resultado debe sentirse inspirado directamente en las referencias visuales del proyecto.

## Reglas de trabajo

- No ejecutes `npm run dev` si el usuario indica que el servidor ya está corriendo.
- Modifica solo los archivos necesarios para la tarea actual.
- Mantén componentes limpios y reutilizables.
- Mantén los datos editables en arrays cuando aplique.
- Todos los botones de WhatsApp deben usar `createWhatsappLink`.
- Los enlaces a secciones deben considerar el header fijo para evitar que el contenido quede tapado.

## Optimización de renders y performance

Cuando se hagan cambios en la landing:

- No definir arrays grandes dentro del render de componentes.
- Mantener data en archivos dentro de `src/data`.
- Mantener helpers en `src/utils`.
- Preferir enlaces `<a>` para WhatsApp y navegación interna.
- Evitar `onClick` innecesarios.
- Usar `React.memo` solo en cards o componentes repetidos que reciben props simples.
- Usar `React.lazy` para secciones pesadas debajo del fold.
- No lazy-load Header, Hero ni Memberships.
- Todas las imágenes fuera del Hero deben usar `loading="lazy"` y `decoding="async"`.
- No usar animaciones infinitas pesadas.
- Evitar exceso de `backdrop-blur`, `blur-3xl`, sombras gigantes o múltiples overlays.
- Importar solo los iconos necesarios desde `lucide-react`.
- Usar keys estables en todos los `.map`.
- No sacrificar el diseño premium por optimización.
- No ejecutar `npm run dev` salvo que el usuario lo pida.

## Logo Teddy Barber Studio

La web debe usar el logo real de Teddy Barber Studio cuando esté disponible.

Ubicación recomendada:

```txt
/public/assets/logo-teddy.png
```

## Sección Barberos

La landing debe incluir una sección llamada **Nuestros Barberos**.

Ubicación recomendada:
Después de `Servicios` y antes de `Galería`.

Componente recomendado:

```txt
src/components/Barbers.jsx
```

## Galería real Teddy Barber Studio

La sección `Gallery` debe usar imágenes reales del negocio cuando estén disponibles.

Las imágenes originales pueden estar en:

```txt
/ref
```
## Orden actual de secciones

El cliente pidió que lo primero visible al entrar a la página sean los barberos.

Orden obligatorio:

1. Header
2. Barberos
3. Hero
4. Membresías
5. Beneficios
6. Servicios
7. Galería / Experiencia Teddy
8. Ubicación y horario
9. CTA final
10. Footer

Reglas:

- `Barbers` no debe estar lazy-loaded porque es la primera sección visible.
- `Barbers` debe tener `id="barberos"`.
- El link `Inicio` puede apuntar a `#barberos`.
- El link `Barberos` debe apuntar a `#barberos`.
- La sección no debe quedar tapada por el header sticky.
- Mantener suficiente `padding-top` y `scroll-mt`.

## Servicios con WhatsApp

Cada servicio debe abrir WhatsApp con mensaje personalizado.

Número:

```txt
50768475071
```

## Logo en navbar

El logo del navbar debe verse completo y proporcional.

Reglas:

- No cambiar la altura del navbar para ajustar el logo.
- No deformar el logo.
- Usar `object-contain`.
- Evitar `overflow-hidden` en el wrapper del logo si lo corta.
- No usar `object-cover` para el logo.
- Ajustar `h`, `max-h`, `max-w` del logo internamente sin modificar el tamaño general del header.
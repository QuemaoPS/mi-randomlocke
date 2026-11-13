# Pokémon Añil Randomlocke Tracker v2.0

## Estructura de Archivos
- `index.html`: Panel principal con resumen de los 3 jugadores (**Quemao**, **Zep**, **Ferry**), estadísticas globales, sincronización con GitHub y copias de seguridad JSON.
- `jugador.html`: Ficha individual para gestionar el equipo activo (6 slots), cajas de almacenamiento, cementerio de caídos y registro de nuevas capturas.
- `progresion.html`: Seguimiento de gimnasios con *Level Cap* y sistema automático de logros.
- `css/style.css`: Hoja de estilos moderna con tema oscuro Pokémon.
- `js/default-data.js`: Estructura base de datos de jugadores, gimnasios y logros.
- `js/anil-sync.js`: Motor de persistencia en `localStorage`, respaldo automático (`Deshacer Cambio`), exportación/importación JSON y sincronización remota con GitHub Raw URL.

## Cómo usar
1. Copia estos archivos en la raíz de tu repositorio manteniendo tus carpetas actuales de imágenes (`assets/avatars/`, etc.).
2. Abre `index.html` en tu navegador o súbelo a GitHub Pages.
3. Usa el botón **Exportar JSON** para subir tus datos actualizados al repositorio y **Sincronizar GitHub** para descargar los cambios de tus compañeros sin conflictos.

# Mi Lista Escolar — Backlog y planificación de Sprints

**Estudiante:** Orlando Padilla Vilches  
**Programa:** Licenciatura en Desarrollo de Sistemas Web  
**Tecnologías:** React, JavaScript, CSS, Vite y GitHub

## 1. Descripción del proyecto

Mi Lista Escolar es una aplicación web para organizar actividades académicas. Permite agregar tareas, asignar una materia o categoría, marcar tareas como completadas, devolverlas a pendientes, eliminarlas y filtrarlas por estado.

## 2. Objetivo de la Actividad 3

Documentar la tercera fase del desarrollo, los ajustes finales, las pruebas observadas y la actualización del backlog y del Sprint Schedule. Los resultados se describen de acuerdo con las capturas disponibles; la compilación de producción y la sincronización final de los archivos deben verificarse por separado.

## 3. Backlog actualizado

| ID | Tarea | Prioridad | Criterio de aceptación | Estado documentado |
|---|---|---|---|---|
| PB-01 | Estructura React/Vite | Alta | La aplicación inicia en el entorno local | Se observó la aplicación ejecutándose en el navegador |
| PB-02 | Interfaz principal | Alta | Se muestran encabezado, resumen, formulario y lista | Observado en capturas |
| PB-03 | Agregar tareas | Alta | Una tarea válida aparece en la lista y cambian los contadores | Función disponible; volver a comprobar con una tarea nueva |
| PB-04 | Cambiar estado de tarea | Alta | El checkbox cambia el estado y se actualizan los contadores | Se documentó el cambio de estado mediante captura |
| PB-05 | Eliminar tareas | Alta | La tarea desaparece y el total se actualiza | Se documentó una eliminación mediante captura |
| PB-06 | Filtrar por estado | Alta | Cada opción muestra todas, solo pendientes o solo completadas | Se documentaron capturas de Pendientes y Completadas |
| PB-07 | Validar nombre | Media | No se acepta un nombre vacío | Pendiente de prueba específica |
| PB-08 | Mensajes y accesibilidad | Media | Las acciones muestran mensajes y los controles tienen etiquetas | El código contiene mensajes y etiquetas; prueba de accesibilidad no realizada |
| PB-09 | Publicar cambios en GitHub | Alta | El repositorio coincide con el código y la documentación entregados | El repositorio es público; falta confirmar que esta versión documental corregida se publique |

## 4. Sprint Schedule: calendario de la tercera fase

La siguiente calendarización organiza el cierre de la fase. Los días son relativos al inicio del Sprint y no representan fechas históricas.

| Sprint / día | Actividad | Entregable | Estado |
|---|---|---|---|
| Sprint 3 · Día 1 | Revisar la interfaz, el registro de tareas y los contadores | Capturas de la aplicación | Interfaz y contadores observados; repetir prueba de registro para confirmar el estado actual |
| Sprint 3 · Día 2 | Marcar y desmarcar tareas y eliminar una tarea | Capturas de cambio de estado y eliminación | Hay capturas de ambas operaciones |
| Sprint 3 · Día 3 | Probar los filtros Pendientes y Completadas | Capturas de cada filtro | Hay capturas de ambos filtros |
| Cierre · Día 4 | Sincronizar el backlog, la documentación y GitHub | Documento y repositorio coherentes | Pendiente de subir esta actualización y verificar la versión publicada |
| Verificación adicional | Ejecutar `npm run build` | Compilación sin errores | No confirmado |

## 5. Ajustes documentados y justificación

| Ajuste | Motivo | Resultado / evidencia |
|---|---|---|
| Mostrar mensajes específicos al agregar, completar, reabrir y eliminar tareas | Informar claramente el resultado de cada acción | En las capturas se observan mensajes de confirmación para cambio de estado y eliminación |
| Mostrar contadores de total, pendientes y completadas | Facilitar el seguimiento de las actividades | Los contadores aparecen en las capturas; comprobar que siempre coincidan con la lista |
| Incorporar filtros por estado | Facilitar la consulta de tareas según su situación | Se muestran capturas de los filtros Pendientes y Completadas |
| Mantener criterios de aceptación en el backlog | Identificar cuándo una tarea puede considerarse terminada | Cada tarea tiene un criterio verificable |
| Sincronizar GitHub con el documento final | Evitar diferencias entre el avance descrito y los archivos publicados | Requiere publicar esta versión actualizada de la documentación |

## 6. Registro de pruebas manuales

| Prueba | Resultado observado | Evidencia / limitación |
|---|---|---|
| Cambiar una tarea a completada | Se observó el mensaje de confirmación y el cambio de contadores | Captura de la aplicación |
| Volver una tarea a pendiente | Se observó el mensaje de confirmación | Captura de la aplicación |
| Eliminar una tarea | Se observó el mensaje de eliminación y la reducción del total | Captura posterior a la eliminación |
| Filtrar tareas pendientes | Se mostró la tarea pendiente correspondiente | Captura del filtro Pendientes |
| Filtrar tareas completadas | Se mostró la tarea completada correspondiente | Captura del filtro Completadas |
| Agregar una tarea nueva | El código implementa esta función | Repetir prueba y conservar captura actual |
| Intentar agregar un título vacío | El código valida el título | Prueba específica pendiente |
| Mostrar un filtro sin resultados | El código incluye mensajes para listas vacías | Prueba específica pendiente |
| Ejecutar `npm run build` | copilacion sin errores |  ejecutado |

## 7. Evidencias

El documento de la Actividad 3 incluye capturas de la aplicación con los contadores, el cambio de estado, la eliminación y los filtros Pendientes y Completadas. Estas evidencias documentan las acciones que aparecen en las imágenes; no sustituyen las pruebas que siguen marcadas como pendientes.

## 8. Repositorio

https://github.com/orlandopadilla4543-sketch/mi-lista-escolar

Antes de entregar, subir esta documentación corregida al repositorio y verificar que el código publicado corresponda con la versión probada.

## 9. Conclusión

La tercera fase se centra en documentar el cambio de estado, la eliminación y los filtros de Mi Lista Escolar. Las capturas disponibles muestran esas operaciones, mientras que la validación de título vacío, los filtros sin resultados y la compilación de producción siguen pendientes de comprobación. La entrega debe mantener el documento de Word y los archivos de GitHub alineados con los resultados reales.


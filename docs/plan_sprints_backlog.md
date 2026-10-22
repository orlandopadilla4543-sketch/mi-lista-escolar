# Mi Lista Escolar — Backlog y planificación de Sprints

**Estudiante:** Orlando Padilla Vilches  
**Programa:** Licenciatura en Desarrollo de Sistemas Web  
**Tecnologías:** React, JavaScript, CSS, Vite y GitHub

## 1. Descripción del proyecto
Mi Lista Escolar es una aplicación web para organizar actividades académicas. Permite agregar tareas, asignar una materia o categoría, marcar tareas como completadas, eliminarlas y filtrarlas por estado.

## 2. Objetivo de la Actividad 3
Dar seguimiento a la tercera fase del desarrollo, revisar las funciones de administración de tareas, documentar los ajustes al código y mantener el backlog y el Sprint Schedule alineados con las pruebas realizadas.

## 3. Backlog actualizado
| ID | Tarea | Prioridad | Criterio de aceptación | Estado |
|---|---|---|---|---|
| PB-01 | Estructura React/Vite | Alta | La aplicación inicia sin errores | Verificar al ejecutar |
| PB-02 | Interfaz principal | Alta | Se muestran encabezado, resumen, formulario y lista | Disponible en el código; revisar en navegador |
| PB-03 | Agregar tareas | Alta | Una tarea válida aparece en la lista y los contadores cambian | Pendiente de prueba manual |
| PB-04 | Cambiar estado de tarea | Alta | El checkbox cambia el estado y se actualizan los contadores | Pendiente de prueba manual |
| PB-05 | Eliminar tareas | Alta | La tarea desaparece y el total se actualiza | Pendiente de prueba manual |
| PB-06 | Filtrar por estado | Alta | Cada opción muestra todas, solo pendientes o solo completadas | Pendiente de prueba manual |
| PB-07 | Validar nombre | Media | No se acepta un nombre vacío | Pendiente de prueba manual |
| PB-08 | Mejorar mensajes y accesibilidad | Media | Las acciones anuncian su resultado y los controles tienen etiquetas accesibles | Implementado en el código; verificar en navegador |
| PB-09 | Publicar cambios en GitHub | Alta | El repositorio contiene los archivos actualizados | Pendiente de confirmar publicación |

## 4. Sprint Schedule: calendario de la tercera fase
La siguiente calendarización es una propuesta de trabajo. Los días son relativos al inicio del Sprint y no son fechas históricas.

| Sprint / día | Actividad | Entregable | Estado |
|---|---|---|---|
| Sprint 3 · Día 1 | Revisar registro de tareas, validación de campos y contadores | Resultado de pruebas y captura | Por comprobar |
| Sprint 3 · Día 2 | Probar marcar/desmarcar tareas y eliminar una tarea | Capturas antes y después de las operaciones | Por comprobar |
| Sprint 3 · Día 3 | Probar filtros Todas, Pendientes y Completadas, incluyendo listas vacías | Capturas de cada filtro | Por comprobar |
| Cierre · Día 4 | Ejecutar compilación, actualizar README y revisar GitHub | Código y documentación sincronizados | Por comprobar |

## 5. Ajustes incluidos en el código
| Ajuste | Motivo | Resultado esperado |
|---|---|---|
| Mensajes específicos al agregar, completar, reabrir, eliminar y filtrar | Facilitar que la persona identifique el resultado de cada acción | Mensaje visible y accesible para cada acción |
| Conteos en las opciones de filtro | Mostrar cuántas tareas corresponden a cada estado | Los números coinciden con los contadores generales |
| Mensajes vacíos diferenciados | Evitar que una lista sin resultados se interprete como error | Indicar si no hay tareas, pendientes o completadas |
| Etiquetas accesibles para los checkboxes y regiones | Mejorar la comprensión de controles con lectores de pantalla | Controles con nombres descriptivos |
| Validación de título y limpieza de espacios | Evitar crear tareas sin nombre o con espacios al inicio/final | Solo se agrega un título válido |

Estos son cambios incorporados al código de esta versión. Su comportamiento final debe comprobarse ejecutando la aplicación.

## 6. Pruebas manuales
Marca el resultado después de probar la aplicación en el navegador.

| Prueba | Resultado esperado | Resultado real |
|---|---|---|
| Agregar una tarea con título | Aparece en la lista y aumentan total y pendientes | Por comprobar |
| Intentar agregar un título vacío | El formulario no agrega la tarea | Por comprobar |
| Marcar una tarea como completada | Cambian pendientes y completadas | Por comprobar |
| Volver una tarea a pendiente | Los contadores se ajustan de nuevo | Por comprobar |
| Eliminar una tarea | Desaparece y baja el total | Por comprobar |
| Elegir “Todas” | Se muestran todas las tareas | Por comprobar |
| Elegir “Pendientes” | Solo se muestran tareas pendientes | Por comprobar |
| Elegir “Completadas” | Solo se muestran tareas completadas | Por comprobar |
| Usar un filtro sin resultados | Aparece un mensaje apropiado | Por comprobar |
| Ejecutar `npm run build` | Vite termina la compilación sin errores | Por comprobar |

## 7. Evidencias que deben añadirse
1. Captura de la aplicación actual abierta en el navegador.
2. Captura después de agregar una tarea.
3. Captura de los contadores tras completar una tarea.
4. Captura de la eliminación antes y después.
5. Captura de los filtros Todas, Pendientes y Completadas.
6. Captura del repositorio GitHub con los archivos actualizados.

## 8. Repositorio
https://github.com/orlandopadilla4543-sketch/mi-lista-escolar

Antes de entregar, confirma que el enlace abre el repositorio y que contiene los cambios que probaste. No se debe afirmar que las pruebas fueron aprobadas sin ejecutarlas.

## 9. Conclusión
La tercera fase se concentra en validar las operaciones principales de Mi Lista Escolar y documentar ajustes que facilitan la comprensión de las acciones, los filtros y los estados vacíos. La entrega se completa cuando las pruebas se ejecutan, se agregan las evidencias y el repositorio coincide con esta documentación.

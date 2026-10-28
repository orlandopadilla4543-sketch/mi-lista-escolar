import { useEffect, useMemo, useState } from "react";

const tareasIniciales = [
  { id: 1, titulo: "Revisar las instrucciones de la actividad", materia: "Organización", completada: true },
  { id: 2, titulo: "Avanzar el proyecto de React", materia: "Desarrollo web", completada: false },
  { id: 3, titulo: "Preparar evidencias para la entrega", materia: "Pendiente", completada: false }
];

const CLAVE_ALMACENAMIENTO = "mi-lista-escolar-tareas-v1";

function cargarTareas() {
  try {
    const guardadas = localStorage.getItem(CLAVE_ALMACENAMIENTO);
    if (guardadas === null) return tareasIniciales;
    const datos = JSON.parse(guardadas);
    if (!Array.isArray(datos)) return tareasIniciales;

    return datos.filter((tarea) =>
      tarea &&
      (typeof tarea.id === "number" || typeof tarea.id === "string") &&
      typeof tarea.titulo === "string" &&
      typeof tarea.materia === "string" &&
      typeof tarea.completada === "boolean"
    );
  } catch {
    return tareasIniciales;
  }
}

export default function App() {
  const [tareas, setTareas] = useState(cargarTareas);
  const [titulo, setTitulo] = useState("");
  const [materia, setMateria] = useState("");
  const [filtro, setFiltro] = useState("todas");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(tareas));
    } catch {
      setMensaje("No se pudieron guardar los cambios en este navegador.");
    }
  }, [tareas]);

  function agregarTarea(event) {
    event.preventDefault();
    const tituloLimpio = titulo.trim();

    if (!tituloLimpio) {
      setMensaje("Escribe el nombre de la tarea antes de agregarla.");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      titulo: tituloLimpio,
      materia: materia.trim() || "General",
      completada: false
    };

    setTareas((actuales) => [...actuales, nuevaTarea]);
    setTitulo("");
    setMateria("");
    setFiltro("todas");
    setMensaje(`La tarea "${nuevaTarea.titulo}" se agregó correctamente.`);
  }

  function alternarTarea(id) {
    const tareaActual = tareas.find((tarea) => tarea.id === id);
    if (!tareaActual) return;

    setTareas((actuales) =>
      actuales.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );

    setMensaje(
      tareaActual.completada
        ? `La tarea "${tareaActual.titulo}" volvió a estar pendiente.`
        : `La tarea "${tareaActual.titulo}" se marcó como completada.`
    );
  }

  function eliminarTarea(id) {
    const tareaAEliminar = tareas.find((tarea) => tarea.id === id);
    if (!tareaAEliminar) return;

    setTareas((actuales) => actuales.filter((tarea) => tarea.id !== id));
    setMensaje(`Se eliminó la tarea "${tareaAEliminar.titulo}".`);
  }

  const tareasFiltradas = useMemo(() => {
    if (filtro === "pendientes") {
      return tareas.filter((tarea) => !tarea.completada);
    }
    if (filtro === "completadas") {
      return tareas.filter((tarea) => tarea.completada);
    }
    return tareas;
  }, [tareas, filtro]);

  const completadas = tareas.filter((tarea) => tarea.completada).length;
  const pendientes = tareas.length - completadas;

  function cambiarFiltro(event) {
    const nuevoFiltro = event.target.value;
    setFiltro(nuevoFiltro);

    const etiquetas = {
      todas: "todas las tareas",
      pendientes: "las tareas pendientes",
      completadas: "las tareas completadas"
    };
    setMensaje(`Filtro aplicado: ${etiquetas[nuevoFiltro]}.`);
  }

  return (
    <main className="contenedor">
      <header className="encabezado">
        <div className="icono" aria-hidden="true">✓</div>
        <p className="sobrelinea">ORGANIZACIÓN ESCOLAR</p>
        <h1>Mi Lista Escolar</h1>
        <p className="subtitulo">Organiza tus actividades y avanza paso a paso.</p>
      </header>

      <section className="resumen" aria-label="Resumen de tareas">
        <article className="tarjeta-resumen">
          <span>Total de tareas</span><strong>{tareas.length}</strong>
        </article>
        <article className="tarjeta-resumen">
          <span>Pendientes</span><strong>{pendientes}</strong>
        </article>
        <article className="tarjeta-resumen">
          <span>Completadas</span><strong>{completadas}</strong>
        </article>
      </section>

      <section className="panel" aria-labelledby="titulo-agregar">
        <h2 id="titulo-agregar">Agregar una tarea</h2>
        <form onSubmit={agregarTarea} className="formulario">
          <label htmlFor="titulo">Nombre de la tarea *</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            placeholder="Ej. Leer el material de la unidad"
            maxLength={100}
            required
            aria-describedby="ayuda-titulo"
          />
          <small id="ayuda-titulo" className="ayuda">Máximo 100 caracteres.</small>

          <label htmlFor="materia">Materia o categoría</label>
          <input
            id="materia"
            name="materia"
            type="text"
            value={materia}
            onChange={(event) => setMateria(event.target.value)}
            placeholder="Ej. Desarrollo web"
            maxLength={50}
            aria-describedby="ayuda-materia"
          />
          <small id="ayuda-materia" className="ayuda">Máximo 50 caracteres. Si lo dejas vacío, se usará “General”.</small>

          <button type="submit" className="boton-principal">+ Agregar tarea</button>
        </form>
        {mensaje && <p className="mensaje" role="status" aria-live="polite">{mensaje}</p>}
      </section>

      <section className="panel" aria-labelledby="titulo-lista">
        <div className="titulo-lista">
          <h2 id="titulo-lista">Mis actividades</h2>
          <label className="filtro-label" htmlFor="filtro">
            Mostrar:
            <select id="filtro" name="filtro" value={filtro} onChange={cambiarFiltro}>
              <option value="todas">Todas ({tareas.length})</option>
              <option value="pendientes">Pendientes ({pendientes})</option>
              <option value="completadas">Completadas ({completadas})</option>
            </select>
          </label>
        </div>

        {tareasFiltradas.length === 0 ? (
          <div className="vacio" role="status">
            {tareas.length === 0
              ? "Todavía no hay tareas. Agrega una para comenzar."
              : filtro === "pendientes"
                ? "No hay tareas pendientes."
                : filtro === "completadas"
                  ? "No hay tareas completadas."
                  : "No hay tareas en esta categoría."}
          </div>
        ) : (
          <ul className="lista">
            {tareasFiltradas.map((tarea) => (
              <li className={`tarea ${tarea.completada ? "hecha" : ""}`} key={tarea.id}>
                <label className="tarea-info">
                  <input
                    type="checkbox"
                    checked={tarea.completada}
                    onChange={() => alternarTarea(tarea.id)}
                    aria-label={`Marcar "${tarea.titulo}" como ${tarea.completada ? "pendiente" : "completada"}`}
                  />
                  <span>
                    <strong>{tarea.titulo}</strong>
                    <small>{tarea.materia}</small>
                  </span>
                </label>
                <button
                  type="button"
                  className="boton-eliminar"
                  onClick={() => eliminarTarea(tarea.id)}
                  aria-label={`Eliminar ${tarea.titulo}`}
                  title="Eliminar tarea"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
      <footer>Proyecto académico · React · Mi Lista Escolar</footer>
    </main>
  );
}

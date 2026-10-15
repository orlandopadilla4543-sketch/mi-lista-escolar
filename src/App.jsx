import { useMemo, useState } from "react";

const tareasIniciales = [
  { id: 1, titulo: "Revisar las instrucciones de la actividad", materia: "Organización", completada: true },
  { id: 2, titulo: "Avanzar el proyecto de React", materia: "Desarrollo web", completada: false },
  { id: 3, titulo: "Preparar evidencias para la entrega", materia: "Pendiente", completada: false }
];

export default function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [titulo, setTitulo] = useState("");
  const [materia, setMateria] = useState("");
  const [filtro, setFiltro] = useState("todas");
  const [mensaje, setMensaje] = useState("");

  function agregarTarea(event) {
    event.preventDefault();
    if (!titulo.trim()) {
      setMensaje("Escribe el nombre de la tarea antes de agregarla.");
      return;
    }
    setTareas((actuales) => [
      ...actuales,
      { id: Date.now(), titulo: titulo.trim(), materia: materia.trim() || "General", completada: false }
    ]);
    setTitulo("");
    setMateria("");
    setMensaje("Tarea agregada correctamente.");
  }

  function alternarTarea(id) {
    setTareas((actuales) => actuales.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  }

  function eliminarTarea(id) {
    setTareas((actuales) => actuales.filter((tarea) => tarea.id !== id));
    setMensaje("Tarea eliminada.");
  }

  const tareasFiltradas = useMemo(() => tareas.filter((tarea) => {
    if (filtro === "pendientes") return !tarea.completada;
    if (filtro === "completadas") return tarea.completada;
    return true;
  }), [tareas, filtro]);

  const completadas = tareas.filter((tarea) => tarea.completada).length;
  const pendientes = tareas.length - completadas;

  return (
    <main className="contenedor">
      <header className="encabezado">
        <div className="icono">✓</div>
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

      <section className="panel">
        <h2>Agregar una tarea</h2>
        <form onSubmit={agregarTarea} className="formulario">
          <label htmlFor="titulo">Nombre de la tarea *</label>
          <input id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ej. Leer el material de la unidad" maxLength="100" />
          <label htmlFor="materia">Materia o categoría</label>
          <input id="materia" value={materia} onChange={(e) => setMateria(e.target.value)}
            placeholder="Ej. Desarrollo web" maxLength="50" />
          <button type="submit" className="boton-principal">+ Agregar tarea</button>
        </form>
        {mensaje && <p className="mensaje" role="status">{mensaje}</p>}
      </section>

      <section className="panel">
        <div className="titulo-lista">
          <h2>Mis actividades</h2>
          <label className="filtro-label" htmlFor="filtro">Mostrar:
            <select id="filtro" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="todas">Todas</option>
              <option value="pendientes">Pendientes</option>
              <option value="completadas">Completadas</option>
            </select>
          </label>
        </div>

        {tareasFiltradas.length === 0 ? (
          <div className="vacio">No hay tareas en esta categoría.</div>
        ) : (
          <ul className="lista">
            {tareasFiltradas.map((tarea) => (
              <li className={`tarea ${tarea.completada ? "hecha" : ""}`} key={tarea.id}>
                <label className="tarea-info">
                  <input type="checkbox" checked={tarea.completada}
                    onChange={() => alternarTarea(tarea.id)} />
                  <span>
                    <strong>{tarea.titulo}</strong>
                    <small>{tarea.materia}</small>
                  </span>
                </label>
                <button className="boton-eliminar" onClick={() => eliminarTarea(tarea.id)}
                  aria-label={`Eliminar ${tarea.titulo}`} title="Eliminar tarea">Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </section>
      <footer>Proyecto académico · React · Mi Lista Escolar</footer>
    </main>
  );
}

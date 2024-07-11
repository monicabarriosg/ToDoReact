
function Filter({ filtro, setFiltro, buscar }) {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>
    </div>
  );
}

export default Filter;

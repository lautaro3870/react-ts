import { Usuario } from "../interfaces/reqRes";
import { useUsuarios } from "../hooks/useUsuarios";

export const Usuarios = () => {
  const { usuarios, paginaAnterior, paginanSiguiente } = useUsuarios();

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <td>
          <img
            src={usuario.avatar}
            style={{ width: "80px", borderRadius: "10px" }}
          />
        </td>
        <td>{usuario.first_name}</td>
        <td>{usuario.email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>

      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anteriores
      </button>
      &nbsp; 
      <button className="btn btn-primary" onClick={paginanSiguiente}>
        Siguientes
      </button>
    </>
  );
};

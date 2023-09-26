import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);

  // se ejecuta dos veces el useEffect
  // se debe al StrictMode que engloba al componente principal, hace que se ejecute
  // dos veces el renderizado
  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });
    setUsuarios(resp.data.data);
  };

  const paginanSiguiente = () => {
    if (paginaRef.current < 2) {
      paginaRef.current++;
      cargarUsuarios();
    }
  };

  const paginaAnterior = () => {
    if (paginaRef.current <= 2 && paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    }
  };

  return {
    usuarios,
    paginaAnterior,
    paginanSiguiente,
  };
};

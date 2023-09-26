/* eslint-disable @typescript-eslint/no-unused-vars */
export const TiposBasicos = () => {
  let nombre: string | number = "lau";
  nombre = 123;

  const poderes: string[] = ["velocidad", "volar", "furza"];
  

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}
      <br />
      {poderes.join(", ")}
    </>
  );
};

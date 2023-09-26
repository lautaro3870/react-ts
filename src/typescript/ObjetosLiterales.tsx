/* eslint-disable @typescript-eslint/no-unused-vars */

interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  ciudad: string;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombre: "lau",
    edad: 20,
    direccion: {
      ciudad: "bilbao dsfkdsjkfsjdk",
    },
  };

  // manera de poner un valor por defecto si no se le pasa el valor al parametro
  const sumar = ( a: number, b: number = 10 ): number => {
    return a + b
  }

  return (
    <>
      Objetos Literales
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
      <span>{sumar(1)}</span>
    </>
  );
};

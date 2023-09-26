import { useForm } from "../hooks/useForm";

enum Sexos {
    Masculino = "M",
    Femenino = "F"
}

export const Formularios = () => {
  const { formulario, onChange, email, password, edad } = useForm({
    email: "lau@gmail.com",
    password: "1234",
    edad: 22,
    sexo: Sexos.Femenino,
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        value={email}
        placeholder="Email"
        className="form-control"
        onChange={(e) => onChange(e.target.value, "email")}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        className="form-control mt-2 mb-2"
        onChange={(e) => onChange(e.target.value, "password")}
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        className="form-control mt-2 mb-2"
        onChange={(e) => onChange(e.target.value, "edad")}
      />
      <select
        name=""
        onChange={(e) => onChange(e.target.value, "sexo")}
        className="form-control mt-2 mb-2"
        id=""
        value={formulario.sexo}
      >
        <option value={Sexos.Masculino}>Masculino</option>
        <option value={Sexos.Femenino}>Femenino</option>
      </select>
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};

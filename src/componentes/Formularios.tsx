import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const { formulario, onChange, email, password } = useForm({
    email: "lau@gmail.com",
    password: "1234",
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
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};

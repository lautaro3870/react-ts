import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export const useForm = <T extends Object>(formulario: T) => {

  const [state, setState] = useState(formulario);

  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return { ...state, formulario:state, onChange };
};

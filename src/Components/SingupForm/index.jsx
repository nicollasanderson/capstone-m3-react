import Input from "../Input";
import { FormDivContainer } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Buttons from "../Buttons";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const SingupForm = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username obrigatório")
      .min(4, "Mínimo de 4 caracteres")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Nome inválido"),
    plataform: yup.string().required("Plataforma obrigatória"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 digitos")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
        "Necessário números e pelo menos 1 letra minúscula e maiúscula"
      ),
    confirm_password: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const RegisterContext = () => useContext(UserContext);
  const { handleRegister } = RegisterContext();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleFormSubmit = (data) => {
    delete data.confirm_password;
    handleRegister(data);
    toast.success("Conta criada com sucesso!");
    history.push("/login");
  };

  return (
    <FormDivContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          label="Username"
          register={register}
          name="username"
          error={errors.username?.message}
        />
        <Input
          label="Sua plataforma favorita"
          register={register}
          name="plataform"
          error={errors.plataform?.message}
        />
        <Input
          label="E-mail"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          register={register}
          name="password"
          type="password"
          error={errors.password?.message}
        />
        <Input
          label="Confirma Senha"
          register={register}
          name="confirm_password"
          type="password"
          error={errors.confirm_password?.message}
        />
        <Buttons type="submit">Cadastrar</Buttons>
      </form>
    </FormDivContainer>
  );
};

export default SingupForm;

import React, { FC, useCallback } from "react";
import Styled from "../styled";
import Input from "../../../Input";
import { useForm } from "react-hook-form";
import { TLogin } from "../../../../types/store/api/auth.type";
import { useLoginMutation } from "../../../../store/api/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidation } from "../../../../constants/validation.schemas";

const LoginForm: FC = () => {
  const [mutation, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin, any, any>({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onBlur",
    resolver: yupResolver(loginFormValidation),
  });

  const submit = useCallback(
    (data: TLogin) => {
      mutation(data);
    },
    [mutation]
  );

  return (
    <Styled.AuthForm onSubmit={handleSubmit(submit)}>
      <Input
        id="auth-input-email"
        label="Email"
        {...register("email", { required: true })}
        error={errors.email?.message}
      />
      <Input
        id="auth-input-password"
        label="Password"
        type="password"
        {...register("password", { required: true })}
        error={errors.password?.message}
      />
      <Styled.AuthSubmitButton disabled={isLoading}>
        Submit
      </Styled.AuthSubmitButton>
    </Styled.AuthForm>
  );
};

export default LoginForm;

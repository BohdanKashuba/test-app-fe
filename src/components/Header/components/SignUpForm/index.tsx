import React, { FC, useCallback } from "react";
import Styled from "../styled";
import Input from "../../../Input";
import { useForm } from "react-hook-form";
import { TSignUp } from "../../../../types/store/api/auth.type";
import { useSignUpMutation } from "../../../../store/api/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidation } from "../../../../constants/validation.schemas";

const SignUpForm: FC = () => {
  const [mutation, { isLoading }] = useSignUpMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUp>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    reValidateMode: "onBlur",
    resolver: yupResolver(signUpFormValidation),
  });

  const submit = useCallback(
    (data: TSignUp) => {
      mutation(data);
    },
    [mutation]
  );

  return (
    <Styled.AuthForm onSubmit={handleSubmit(submit)}>
      <Input
        id="auth-input-email"
        label="Name"
        {...register("name", { required: true })}
        error={errors.name?.message}
      />
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

export default SignUpForm;

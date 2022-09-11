import { Flex, Button, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { Input } from "../components/Form/Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/router";

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema), 
    mode: 'onChange'
  });

  const { errors } = formState;

  const router = useRouter();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push('/dashboard');

    console.log(values);
  }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        onSubmit={handleSubmit(handleSignIn)}
        width='100%'
        maxWidth='360px'
        bg="gray.800"
        p='8'
        borderRadius={8}
        flexDir='column'
      >

        <Stack spacing={4}>
          <Input name="email" label="E-mail" {...register('email')} error={errors.email as FieldError} />
          <Input name="password" label="password" type="password" {...register('password')} error={errors.password as FieldError} />
        </Stack>

        <Button type="submit" mt='6' colorScheme='teal' size='lg' disabled={!formState.isDirty || !formState.isValid} isLoading={formState.isSubmitting}>
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}

import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex as='form' width='100%' maxWidth='360px' bg="gray.800" p='8' borderRadius={8} flexDir='column'>

        <Stack spacing={4}>
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="password" type="password" />
        </Stack>

        <Button type="submit" mt='6' colorScheme='teal' size='lg'>
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}

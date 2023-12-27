
import { Button, ButtonText, Center, Heading, ModalBackdrop, ModalContent, ModalFooter, ModalHeader, Pressable, Text } from "@gluestack-ui/themed";

export type ModalProps = {
  password: string;
  handleClose: () => void;
}

export function ModalPassword({ password, handleClose }: ModalProps) {

  return (
    <Center flex={1} w="$full" >
      <ModalBackdrop />
      <ModalContent bg="$amber50" alignItems="center" justifyContent="center">
        <ModalHeader >
          <Heading size="xl">Password</Heading>
        </ModalHeader>
        <Pressable w="$4/5" alignItems="center" justifyContent="center" bg="$secondary900" p="$1" borderRadius="$lg">
          <Text size="lg" color="$white">{password}</Text>
        </Pressable>

        <ModalFooter gap="$8">

          <Button bg="$yellow500" $active-bg="$yellow400" onPress={handleClose} >
            <ButtonText color="$primary900">Voltar</ButtonText>
          </Button>

          <Button bg="$primary900" $active-bg="$primary800">
            <ButtonText >Salvar Senha</ButtonText>
          </Button>

        </ModalFooter>
      </ModalContent>

    </Center >
  )
}


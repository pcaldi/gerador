import React from "react";
import { Alert } from "react-native";
import * as Clipboard from "expo-clipboard"

import useStorage from "../../hooks/useStorage";

import { Button, ButtonText, Center, Heading, ModalBackdrop, ModalContent, ModalFooter, ModalHeader, Pressable, Text } from "@gluestack-ui/themed";

export type ModalProps = {
  password: string;
  handleClose: () => void;
}

export function ModalPassword({ password, handleClose }: ModalProps) {

  const { saveItem } = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password)
    Alert.alert("Senha Copiada!");
    await saveItem("@pass", password);
    handleClose();
  }

  async function handleCopyStoragePassword() {

    Alert.alert("Senha salva com sucesso!");
    await saveItem("@pass", password);
    handleClose();
  }




  return (
    <Center flex={1} w="$full" >
      <ModalBackdrop />
      <ModalContent bg="$amber50" alignItems="center" justifyContent="center">
        <ModalHeader >
          <Heading size="xl">Password</Heading>
        </ModalHeader>
        <Pressable w="$4/5" alignItems="center" justifyContent="center" bg="$secondary900" p="$1" borderRadius="$lg" onLongPress={handleCopyPassword} >
          <Text size="lg" color="$white">{password}</Text>
        </Pressable>

        <ModalFooter gap="$8">

          <Button bg="$yellow500" $active-bg="$yellow400" onPress={handleClose} >
            <ButtonText color="$primary900">Voltar</ButtonText>
          </Button>

          <Button bg="$primary900" $active-bg="$primary800" onPress={handleCopyStoragePassword}>
            <ButtonText >Salvar Senha</ButtonText>
          </Button>

        </ModalFooter>
      </ModalContent>

    </Center >
  )
}


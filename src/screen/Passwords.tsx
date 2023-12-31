import React, { useState, useEffect } from "react";


import { Heading, Center, FlatList, View } from "@gluestack-ui/themed";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import useStorage from "../hooks/useStorage";
import { PasswordList } from "../components/PasswordList";

export function Passwords() {
  const [listPassword, setListPassword] = useState<string[]>([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();


  async function loadPassword() {
    const password = await getItem("@pass") // @pass é o banco que ele deve buscar.
    setListPassword(password || []); // Passar para o state a lista do storage que recebi na variável password.
  }

  async function handleRemovePassword(item: string) {
    await removeItem("@pass", item);
    loadPassword();
  }


  useEffect(() => {
    loadPassword();
  }, [focused])


  return (

    <View bg="$amber100" h={"100%"}>
      <Center bg="$primary900" h="$40">
        <Heading color="$white" size="3xl">Minhas Senhas</Heading>
      </Center>
      <FlatList
        pt="$6"
        data={listPassword}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <PasswordList data={item as string} removePassword={() => handleRemovePassword(item as string)} />}
      />
    </View>

  )
}

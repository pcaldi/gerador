import React from "react";
import { Pressable, Text } from "@gluestack-ui/themed"

type PasswordListProps = {
  data: string;
  removePassword: () => void;
}

export function PasswordList({ data, removePassword }: PasswordListProps) {
  return (

    <Pressable onLongPress={removePassword} bg="$amber100" p="$3.5" borderRadius="$md" m="$2.5" justifyContent="space-between"
    >
      <Text color="$primary900" fontWeight="$semibold">{data}</Text>
    </Pressable>
  )
}

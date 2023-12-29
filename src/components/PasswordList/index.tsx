import React, { useState } from "react";
import { Pressable, Text } from "@gluestack-ui/themed";
import { Eye, EyeOff } from "lucide-react-native";

type PasswordListProps = {
  data: string;
  removePassword: () => void;
};

export function PasswordList({ data, removePassword }: PasswordListProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Pressable
      onLongPress={removePassword}
      bg="$amber100"
      p="$3"
      borderRadius="$md"
      m="$2.5"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
    >
      <Text color="$primary900" size="lg" fontWeight="$semibold">
        {showPassword ? data : '*'.repeat(data.length)}
      </Text>

      <Pressable onPress={togglePasswordVisibility}>
        {showPassword ? <Eye width={20} height={20} color="black" /> : <EyeOff width={20} height={20} color="black" />}
      </Pressable>
    </Pressable>
  );
}

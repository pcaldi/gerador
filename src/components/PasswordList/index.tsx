import React, { useState } from "react";
import { Button, ButtonIcon, Icon, Pressable, Text, TrashIcon, View } from "@gluestack-ui/themed";
import { Eye, EyeOff } from "lucide-react-native";
import { Swipeable } from "react-native-gesture-handler";

type PasswordListProps = {
  data: string;
  removePassword: () => void;
};

export function PasswordList({ data, removePassword }: PasswordListProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const renderRightActions = () => {
    return (
      <View justifyContent="center" alignContent="center" bgColor="$amber50" p="$1" >
        <Button bg="$red600" onPress={removePassword} h="$12" $active-bgColor='$red400'   >
          <ButtonIcon as={TrashIcon} w="$6" h="$6" color="$white" p="$4" m="$1" />
        </Button>
      </View>
    )
  }

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View
        bg="$primary900"
        p="$3"
        borderRadius="$md"
        m="$3"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
      >
        <Text color="$white" size="lg" fontWeight="$semibold">
          {showPassword ? data : '*'.repeat(data.length)}
        </Text>

        <Pressable onPress={togglePasswordVisibility}>
          {showPassword ? <Eye width={20} height={20} color="white" /> : <EyeOff width={20} height={20} color="white" />}
        </Pressable>
      </View>
    </Swipeable>

  );
}


import { VStack, Text, Image, Slider, Center, SliderTrack, SliderFilledTrack, SliderThumb, Button, ButtonText } from '@gluestack-ui/themed'
import { useState } from 'react'


export function Home() {
  const [size, setSize] = useState(10);

  function generatedPassword() {
    console.log("Clicou")
  }

  return (
    <VStack justifyContent='center' alignItems='center' gap="$6" flex={1} backgroundColor='$amber50'>
      <Image size='xl' source={require('../assets/lock-1.png')} alt='Image' />


      <Text fontSize="$4xl" p="$10" fontWeight='$bold'>{size} caracteres</Text>

      <Center w="$5/6" bg='$amber100' p="$5" borderRadius="$lg">
        <Slider
          size="lg"
          orientation="horizontal"
          minValue={6}
          maxValue={20}
          onChange={(value) => setSize(value)}
          value={size}
        >
          <SliderTrack>
            <SliderFilledTrack bg='$amber300' />
          </SliderTrack>
          <SliderThumb bg="$amber500" $active-bgColor='$amber600' />
        </Slider>
      </Center>

      <Button w="$5/6" h="$16" bg='$primary900' $active-bgColor='$primary800' borderRadius="$lg" mt="$6" onPress={generatedPassword}>
        <ButtonText fontSize="$2xl" p="$4">Gerar Senha</ButtonText>
      </Button>
    </VStack>
  )
}


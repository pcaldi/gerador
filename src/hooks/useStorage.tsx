import AsyncStorage from "@react-native-async-storage/async-storage";

interface UseStorageMethods {
  getItem: (key: string) => Promise<any>;
  saveItem: (key: string, value: any) => Promise<void>;
  removeItem: (key: string, item: any) => Promise<void>;
}

const useStorage = (): UseStorageMethods => {
  // Buscar items no storage
  const getItem = async (key: string) => {
    try {
      const passwords = await AsyncStorage.getItem(key);

      // Verifica se passwords não é null antes de fazer o parse
      if (passwords !== null) {
        return JSON.parse(passwords);
      }

      return [];
    } catch (error) {
      console.error("Erro ao buscar item", error);
      return [];
    }
  };

  // Salvar items no storage
  const saveItem = async (key: string, value: any) => {
    try {
      // Busco o item na lista
      let passwords = await getItem(key);

      // Adiciono na lista
      passwords.push(value);

      // Salvo ela na lista atualizada
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.error("Erro ao salvar item ", error);
    }
  };

  // Remover items no storage
  const removeItem = async (key: string, item: any) => {
    try {
      let passwords = await getItem(key);

      let myPassword = passwords.filter((storedItem: any) => {
        return storedItem !== item;
      });

      await AsyncStorage.setItem(key, JSON.stringify(myPassword));
    } catch (error) {
      console.error("Erro ao remover item ", error);
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;

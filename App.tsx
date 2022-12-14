import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Dashboard } from "./src/screens/Dashboard";
import { THEME } from "./src/styles/global";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <Dashboard  /> : null}
    </NativeBaseProvider>
  );
}

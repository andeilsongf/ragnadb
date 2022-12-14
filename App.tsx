import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";


import { THEME } from "./src/styles/global";
import { Login } from "./src/screens/Login";

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <Login  /> : null}
    </NativeBaseProvider>
  );
}

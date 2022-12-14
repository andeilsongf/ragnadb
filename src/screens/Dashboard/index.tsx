import { Center, Heading, Image, VStack } from "native-base";

import LogoSvg from "../../assets/logo.png";

import { getStatusBarHeight } from "react-native-status-bar-height";

export function Dashboard() {
  return (
    <VStack flex={1} bg="white" mt={getStatusBarHeight() + 50}>
        {/* <Image source={LogoSvg} alt="Logo" w={258} h={160} /> */}

    

    </VStack>
  );
}

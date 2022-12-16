import { Heading, Image, Text, VStack } from "native-base";

import LogoSvg from "../../assets/logo.png";
import { SocialButtons } from "../../components/SocialButtons";

import { AppleLogo, GoogleLogo } from "phosphor-react-native";

export function Login() {
  return (
    <>
      <VStack
        flex={1}
        justifyContent="center"
        px={6}
        alignItems="center"
        w="full"
      >
        <Image source={LogoSvg} w={218} h={111} alt="Logo" mb={12} />
        <Heading fontSize={24} color="blue.200" fontWeight={400}>
          Welcome to Ragna{""}
          <Heading color="blue.100" fontWeight={700}>
            DB
          </Heading>
        </Heading>

        <Text
          textAlign="center"
          color="gray.200"
          mt={3}
          fontWeight="normal"
          fontSize={14}
          mb={12}
        >
          Log in to find informations about
          {"\n"} Ragnarok with just few clicks
        </Text>

        <SocialButtons
          name="Continue with Google"
          backgroundColor="#fff"
          color="rgba(0, 0, 0, 0.54);"
          icon={<GoogleLogo color="rgb(0, 0, 0);" size={24} weight="light" />}
          onPress={() => {}}
          mb={4}
          shadow="2"
        />

        <SocialButtons
          name="Continue with Apple"
          backgroundColor="#000"
          color="#fff"
          icon={<AppleLogo color="#fff" size={24} weight="fill" />}
          onPress={() => {}}
        />
      </VStack>

      <Text
        color="gray.300"
        mb={10}
        textAlign="center"
        fontSize={14}
        fontWeight={400}
      >
        I don't have an account
      </Text>
    </>
  );
}

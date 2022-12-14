import { Button, Heading, Icon, Image, Input, Text, VStack } from "native-base";
import { Password, User } from "phosphor-react-native";

import LogoSvg from "../../assets/logo.png";

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
        <Image source={LogoSvg} w={218} h={135} alt="Logo" mb={12} />
        <Heading
          fontFamily="body"
          fontSize={24}
          color="blue.200"
          fontWeight={400}
        >
          Welcome to Ragna{""}
          <Heading fontFamily="body" color="blue.100" fontWeight={700}>
            DB
          </Heading>
        </Heading>

        <Text
          textAlign="center"
          color="gray.200"
          mt={3}
          fontFamily="body"
          fontSize={14}
        >
          Log in to find informations about
          {"\n"} Ragnarok with just few clicks
        </Text>

        <Input
          mt={10}
          placeholder="Email Address"
          h={12}
          borderColor="gray.200"
          placeholderTextColor="gray.200"
          fontSize={14}
          fontFamily="body"
          _focus={{
            borderColor: "#2e2c2d",
            backgroundColor: "#fff",
          }}
          autoCapitalize="none"
          leftElement={<Icon ml={2} as={<User size={20} color="#2e2c2d" />} />}
        />

        <Input
          mt={2}
          placeholder="Password"
          borderColor="gray.200"
          placeholderTextColor="gray.200"
          h={12}
          fontSize={14}
          fontFamily="body"
          _focus={{
            borderColor: "#2e2c2d",
            backgroundColor: "#fff",
          }}
          secureTextEntry
          leftElement={
            <Icon ml={2} as={<Password size={20} color="#2e2c2d" />} />
          }
        />

        <Text
          alignSelf="start"
          mt={5}
          mb={9}
          fontSize={14}
          fontWeight={300}
          color="blue.200"
          letterSpacing={0.24}
        >
          Forgot password?
        </Text>

        <Button
          w="full"
          mt={3}
          h={52}
          rounded="10"
          bg="blue.100"
          _pressed={{
            backgroundColor: "#0640aa",
          }}
          _text={{
            color: "#FFF",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          LOGIN
        </Button>
      </VStack>

      <Text
        color="gray.300"
        mb={10}
        textAlign="center"
        fontSize={16}
        fontWeight={400}
      >
        I don't have an account
      </Text>
    </>
  );
}

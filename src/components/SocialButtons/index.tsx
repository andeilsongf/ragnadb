import { Button, IButtonProps, Icon, IconButton, Input } from "native-base";
import { FacebookLogo, IconProps } from "phosphor-react-native";

interface Props extends IButtonProps {
  name: string;
  backgroundColor: string;
  color: string;
  icon: JSX.Element | IconProps;
  border?: string;
  onPress: () => void;
}

export function SocialButtons({
  name,
  backgroundColor,
  color,
  icon,
  border,
  ...rest
}: Props) {

 

  return (
    <Button
      w="full"
      h={54}
      bg={backgroundColor}
      leftIcon={<Icon as={icon} />}
      _text={{
        fontWeight: 400,
        color: color,
        fontSize: 20,
      }}
      _pressed={{
        background: "inherit",
      }}
      {...rest}
    >
      {name}
    </Button>
  );
}

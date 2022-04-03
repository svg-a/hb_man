import { ReactNode } from "react";
import { Flex ,Box} from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (

    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="gray.800"
      paddingBottom='80px'

    >
        {children}
    </Flex>

  );
}

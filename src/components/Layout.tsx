import React, { ReactNode } from "react";
import {Flex, Box, Link, Text, Spacer, Icon, Center, Square} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
      // paddingBottom='400px'

    >
        {children}


    </Flex>

  );
}

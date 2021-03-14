import React from "react";

import { Button, Flex } from "@chakra-ui/react";

export const Login = () => {
  return (
    <Flex
      direction="column"
      px={8}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Button>Hello from React 👋</Button>
    </Flex>
  );
};

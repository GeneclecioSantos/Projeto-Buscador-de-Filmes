import React, { useContext } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../context/AuthGoogle";

export default function Login() {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  function loginGoogle() {
    signInGoogle();
  }

  if (!signed) {
    return (
      <Flex
        w="100%"
        h="100%"
        justify="center"
        align="center"
        bgGradient="linear(to-r, rgb(140 155 251), rgb(176 218 212))"
      >
        <Button colorScheme="blue" onClick={() => loginGoogle()}>
          Logar com o Google
        </Button>
      </Flex>
    );
  } else {
    return <Navigate to="/home" />;
  }
}

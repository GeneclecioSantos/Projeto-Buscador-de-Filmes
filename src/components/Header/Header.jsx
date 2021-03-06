import {
  Flex,
  Text,
  Box,
  Image,
  Stack,
  Button,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { FaUserCircle, FaListAlt } from "react-icons/fa";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import Logo from "../../images/cinema.png";

export function Header() {
  const isDesktop = useBreakpointValue({ base: false, sm: false, lg: true });

  return (
    <Flex w="inherit" h="15%" bgColor="#76cae5" justify="space-between">
      {/* logo */}
      <Flex
        justify="center"
        align="center"
        ml={{ base: "15px", sm: "25px", lg: "25px" }}
      >
        <Box w={{ base: "50px", sm: "60px", lg: "70px" }}>
          <Image src={Logo} alt="Dan Abramov" />
        </Box>
        <Text
          display="flex"
          justify="center"
          align="center"
          fontWeight="bold"
          color="white"
          fontFamily="cursive"
          fontSize={{ base: "1.5rem", sm: "2rem", lg: "2rem" }}
          ml={{ base: "18px", sm: "5px", lg: "5px" }}
        >
          Buscador de Filmes
        </Text>
      </Flex>

      <Flex
        justify="center"
        align="center"
        mr={{ base: "10px", sm: "25px", lg: "30px" }}
      >
        {!isDesktop ? (
          <Flex justify="center" align="center">
            <Icon
              as={HiDotsCircleHorizontal}
              w={{ base: 7, sm: 8 }}
              h={{ base: 7, sm: 8 }}
              color="#2d2d6a"
              mr={{ base: "10px", sm: "20px" }}
            />
          </Flex>
        ) : (
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={<FaUserCircle />}
              colorScheme="white"
              variant="solid"
              borderRadius="50px"
              fontFamily="cursive"
              bgGradient="linear(to-r, #2d2d6a, #53539a)"
              onClick={() => alert("Caminho para perfil")}
            >
              Perfil
            </Button>
            <Button
              leftIcon={<FaListAlt />}
              colorScheme="white"
              variant="solid"
              borderRadius="50px"
              fontFamily="cursive"
              bgGradient="linear(to-r, #2d2d6a, #53539a)"
              onClick={() => alert("Caminho para lista de favoritos")}
            >
              Lista
            </Button>
          </Stack>
        )}
      </Flex>
    </Flex>
  );
}

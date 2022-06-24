import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { BiSearchAlt } from "react-icons/bi";
import { GetMovies } from "../../Hook/useGetMovies";
import { useState } from "react";

export default function Home() {
  const [movie, setMovie] = useState("");

  return (
    <Flex w="100%" h="100vh" direction="column">
      <Header />
      <Flex h="100vh" bgColor="#353581" p="10px" justify="space-between">
        <Flex
          w="90%"
          h="full"
          direction="column"
          justify="space-between"
          mr="5px"
        >
          <Flex
            w="full"
            h="20%"
            bgColor="gray.300"
            borderRadius="10px"
            shadow="0 0 0.1em #d4d1d1"
            p="10px"
            direction="column"
            justify="center"
          >
            <InputGroup>
              <InputLeftElement children={<BiSearchAlt color="gray.300" />} />
              <Input
                bgColor="white"
                type="search"
                placeholder="Pesquisar por um filme ou uma série."
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
              />
            </InputGroup>
            <Button
              my="10px"
              bgColor="#76cae5"
              fontWeight="bold"
              color="white"
              onClick={() => GetMovies(movie)}
            >
              Pesquisar
            </Button>
            <Button
              bgColor="#76cae5"
              fontWeight="bold"
              color="white"
              shadow="0 0 0.2em #cecece"
              textShadow="0 0 0.2em #cecece"
              onClick={() => setMovie("")}
            >
              Limpar
            </Button>
          </Flex>
          <Flex
            w="full"
            h="80%"
            mt="10px"
            bgColor="gray.300"
            borderRadius="10px"
            shadow="0 0 0.1em #d4d1d1"
            p="10px"
          >
            <Text fontWeight="bold" color="white">
              Favoritos
            </Text>
          </Flex>
        </Flex>
        <Flex
          w="90%"
          h="full"
          bgColor="gray.300"
          borderRadius="10px"
          shadow="0 0 0.1em #d4d1d1"
          ml="5px"
          p="10px"
        >
          <Text fontWeight="bold" color="white">
            Resultados
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

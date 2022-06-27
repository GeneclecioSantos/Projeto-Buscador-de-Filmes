import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { CardMovie } from "../../components/Card/CardMovies";
import { BiSearchAlt } from "react-icons/bi";
import { GetMovies } from "../../Hook/useGetMovies";
import { useState } from "react";

export default function Home() {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [listMovies, setListMovies] = useState("");

  console.log(listMovies);

  function handleClear(setSearchedMovie, setListMovies) {
    setSearchedMovie("");
    setListMovies("");
  }

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
                value={searchedMovie}
                onChange={(e) => setSearchedMovie(e.target.value)}
              />
            </InputGroup>
            <Button
              my="10px"
              bgColor="#76cae5"
              fontWeight="bold"
              color="white"
              onClick={() => GetMovies(searchedMovie, setListMovies)}
            >
              Pesquisar
            </Button>
            <Button
              bgColor="#76cae5"
              fontWeight="bold"
              color="white"
              shadow="0 0 0.2em #cecece"
              textShadow="0 0 0.2em #cecece"
              onClick={() => handleClear(setSearchedMovie, setListMovies)}
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
          h="100%"
          bgColor="gray.300"
          borderRadius="10px"
          shadow="0 0 0.1em #d4d1d1"
          ml="5px"
          p="10px"
          direction="column"
        >
          <Flex justify="center" align="center">
            <Text
              fontWeight="bold"
              color="white"
              pb="10px"
              textShadow="0 0 .2em gray"
              fontFamily="cursive"
              fontSize={{ base: "1rem", sm: "2rem", lg: "1.3rem" }}
            >
              Resultados
            </Text>
          </Flex>

          <Divider />

          <Flex
            w="full"
            h="500px"
            direction="column"
            wrap="wrap"
            overflowY={listMovies ? "scroll" : "none"}
          >
            {listMovies ? (
              <Flex direction="column">
                {listMovies.movies.map((movie, index) => (
                  <Flex key={index}>
                    <CardMovie movie={movie} />
                  </Flex>
                ))}
              </Flex>
            ) : (
              <Flex
                w="full"
                h="full"
                justify="center"
                align="center"
                fontFamily="cursive"
                color="gray"
                opacity="0.3"
                textShadow="0 0 .1em gray"
                fontSize="3rem"
              >
                nenhum filme foi pesquisado
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

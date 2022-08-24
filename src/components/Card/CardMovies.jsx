import { Flex, Text, Image, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export function CardMovie({ movie }) {
  const [likeMovie, setLikeMovie] = useState(false);
  const url = "https://image.tmdb.org/t/p/w500/" + movie.poster;
  const filmesSalvos = JSON.parse(localStorage.getItem("filmesSalvos")) || [];

  function handleFavorited() {
    setLikeMovie(true);
    salveMovie(movie);
  }

  function salveMovie() {
    const arrayClear = filmesSalvos.filter(function (obj) {
      return obj.id === movie.id;
    });

    if (arrayClear.length >= 1) {
      alert("Já contém este item na lista");
    } else {
      alert("Item salvo na lista!");
      filmesSalvos.push(movie);

      salve();
      pegarItensSalvos();
    }
  }

  function salve() {
    localStorage.setItem("filmesSalvos", JSON.stringify(filmesSalvos));
  }

  function pegarItensSalvos() {
    const totalSalvosExibidos = filmesSalvos;
    console.log(totalSalvosExibidos);
  }

  return (
    <Flex
      w="95%"
      minH="200px"
      mt="10px"
      border="1px gray"
      shadow="0 0 .3em gray"
      borderRadius="10px"
      p="10px"
    >
      <Flex>
        <Image w="150px" h="180px" src={url} alt="poster" />
      </Flex>
      <Flex w="80%" direction="column" px="10px" fontFamily="cursive">
        <Flex w="full" justify="space-between" align="center">
          <Flex direction="column">
            <Text fontSize="1rem">{movie.name}</Text>
            <Text fontSize=".7rem">{movie.date}</Text>
            <Text fontSize=".7rem">{movie.note}</Text>
          </Flex>
          <Flex align="end" direction="column">
            <Icon
              as={FaHeart}
              w={5}
              h={5}
              cursor="pointer"
              color={likeMovie ? "red.400" : "gray.400"}
              onClick={() => handleFavorited()}
            />
          </Flex>
        </Flex>
        <Flex mt="10px">
          <Text fontSize=".9rem">{movie.description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

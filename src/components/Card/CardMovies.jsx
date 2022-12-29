import { Flex, Text, Image } from "@chakra-ui/react";
import ImgUndefined from "../../images/undefined.png";

export function CardMovie({ movie }) {
  const url = "https://image.tmdb.org/t/p/w500/" + movie.poster;

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
        <Image
          w="150px"
          h="180px"
          src={movie.poster ? url : ImgUndefined}
          alt="poster"
        />
      </Flex>
      <Flex w="80%" direction="column" px="10px" fontFamily="cursive">
        <Flex w="full" justify="space-between" align="center">
          <Flex direction="column">
            <Text fontSize="1rem">{movie.name}</Text>
            <Text fontSize=".7rem">{movie.date}</Text>
            <Text fontSize=".7rem">{movie.note}</Text>
          </Flex>
        </Flex>
        <Flex mt="10px">
          <Text fontSize=".9rem">{movie.description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

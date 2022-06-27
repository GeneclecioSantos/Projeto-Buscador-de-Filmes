import { Flex, Text, Image, Icon } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";

export function CardMovie({ movie }) {
  return (
    <Flex
      w="full"
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
          src="https://bit.ly/dan-abramov"
          // src="https://image.tmdb.org/t/p/w500/"
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
          <Flex align="end" direction="column">
            <Icon as={FiHeart} w={5} h={5} cursor="pointer" />
          </Flex>
        </Flex>
        <Flex mt="10px">
          <Text fontSize=".9rem">{movie.description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

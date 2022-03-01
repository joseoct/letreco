import { Box, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { UserAttempContext } from "../contexts/UserAttempContext";

interface AttempProps {
  attemp: number;
}

export function Attemp({ attemp }: AttempProps) {

  const { userWord, attemp: contextAttemp } = useContext(UserAttempContext);

  return (
    <HStack>
      <Box
        bg={contextAttemp === attemp ? 'orange.100' : 'orange.400'}
        p={8}
        color="black"
      >
        {userWord[attemp][0]}
      </Box>
      <Box
        bg={contextAttemp === attemp ? 'orange.100' : 'orange.400'}
        p={8}
        color="black"
      >
        {userWord[attemp][1]}
      </Box>
      <Box
        bg={contextAttemp === attemp ? 'orange.100' : 'orange.400'}
        p={8}
        color="black"
      >
        {userWord[attemp][2]}
      </Box>
      <Box
        bg={contextAttemp === attemp ? 'orange.100' : 'orange.400'}
        p={8}
        color="black"
      >
        {userWord[attemp][3]}
      </Box>
      <Box
        bg={contextAttemp === attemp ? 'orange.100' : 'orange.400'}
        p={8}
        color="black"
      >
        {userWord[attemp][4]}
      </Box>
    </HStack>
  );
}

import { useContext } from "react";
import { UserAttempContext } from "../contexts/UserAttempContext";
import { Button, HStack, VStack } from "@chakra-ui/react";

export function Keyboard () {
  const { setUserWord, attemp, userWord } = useContext(UserAttempContext);

  function handleAddLetterToUserWord(letter: string) {
    if (attemp < 5) {
      const newArray = [...userWord]; 

      newArray[attemp] += letter;

      setUserWord(newArray);
    }

  }

  return (
    <VStack>
      <HStack>
        <Button onClick={() => handleAddLetterToUserWord('Q')}>Q</Button>
        <Button onClick={() => handleAddLetterToUserWord('W')}>W</Button>
        <Button onClick={() => handleAddLetterToUserWord('E')}>E</Button>
        <Button onClick={() => handleAddLetterToUserWord('R')}>R</Button>
        <Button onClick={() => handleAddLetterToUserWord('T')}>T</Button>
        <Button onClick={() => handleAddLetterToUserWord('Y')}>Y</Button>
        <Button onClick={() => handleAddLetterToUserWord('U')}>U</Button>
        <Button onClick={() => handleAddLetterToUserWord('I')}>I</Button>
        <Button onClick={() => handleAddLetterToUserWord('O')}>O</Button>
        <Button onClick={() => handleAddLetterToUserWord('P')}>P</Button>
      </HStack>
      <HStack>
        <Button onClick={() => handleAddLetterToUserWord('A')}>A</Button>
        <Button onClick={() => handleAddLetterToUserWord('S')}>S</Button>
        <Button onClick={() => handleAddLetterToUserWord('D')}>D</Button>
        <Button onClick={() => handleAddLetterToUserWord('F')}>F</Button>
        <Button onClick={() => handleAddLetterToUserWord('G')}>G</Button>
        <Button onClick={() => handleAddLetterToUserWord('H')}>H</Button>
        <Button onClick={() => handleAddLetterToUserWord('J')}>J</Button>
        <Button onClick={() => handleAddLetterToUserWord('K')}>K</Button>
        <Button onClick={() => handleAddLetterToUserWord('L')}>L</Button>
      </HStack>
      <HStack>
        <Button onClick={() => handleAddLetterToUserWord('Z')}>Z</Button>
        <Button onClick={() => handleAddLetterToUserWord('X')}>X</Button>
        <Button onClick={() => handleAddLetterToUserWord('C')}>C</Button>
        <Button onClick={() => handleAddLetterToUserWord('V')}>V</Button>
        <Button onClick={() => handleAddLetterToUserWord('B')}>B</Button>
        <Button onClick={() => handleAddLetterToUserWord('N')}>N</Button>
        <Button onClick={() => handleAddLetterToUserWord('M')}>M</Button>
      </HStack>
    </VStack>
  );
}

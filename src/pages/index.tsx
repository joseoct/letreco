import { Keyboard } from "../components/Keyboard";
import { VStack, Heading, Button } from "@chakra-ui/react";
import { Attemp } from "../components/Attemp";
import { useContext } from "react";
import { UserAttempContext } from "../contexts/UserAttempContext";

export default function Home() {

  const correctWord = "TESTE";
  const { userWord, setAttemp, attemp, setUserWord } = useContext(UserAttempContext);

  function handleVerifyWords() {
    if (userWord.length === 5) {
      if (userWord[attemp] === correctWord) {
        alert("You win!");

        setUserWord(Array(5).fill(""));
      } else {
        if (attemp === 4) {
          alert("You lose!");

          setUserWord(Array(5).fill(""));
        } else {
          setAttemp(attemp + 1);
        }
      }
    }
  }

  return (
    <VStack h="100vh" justify="space-around">
      <Heading as="h1">LETRECO</Heading>

      <VStack spacing="5">
        <Attemp attemp={0}/>
        <Attemp attemp={1}/>
        <Attemp attemp={2}/>
        <Attemp attemp={3}/>
        <Attemp attemp={4}/>
      </VStack>

      <Button onClick={handleVerifyWords} size="lg">Verificar</Button>

      <Keyboard />
    </VStack>
  );
}

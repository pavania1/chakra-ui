import { ChakraProvider } from "@chakra-ui/react";
import AspectRation from './components/MyAspectRatio'

export default function Home() {
  return (
  <ChakraProvider>
    <AspectRation />
  </ChakraProvider>
  );
}

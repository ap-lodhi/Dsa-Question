function rec(n){
    if(n<=1){
        return n

    }
    return rec(n-1)+rec(n-2)
}

console.log(rec(4))




import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Square,
  MenuDivider,
  VStack,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

const ClassDropDown = () => {
  const data = ["1st", "2nd", "3rd", "4th", "5th"];
  return (
    <>
      <Flex justifyContent={"end"} width={"80%"}>
        <Box boxShadow="dark-lg" pl="2" pr="2" rounded="md" bg="white">
          <Menu>
            <MenuButton
              px={4}
              py={2}
              border={"none"}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
            >
              Class
              <ChevronDownIcon />
            </MenuButton>
            <MenuList minW="25%">
              {data.map((ele) => (
                <MenuItem>{ele}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );
};
export default ClassDropDown;















import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

const Scroll = () => {
  const [visibility, setVisibility] = useState({
    section1: true,
    section2: true,
    section3: true,
    section4: true,
    section5: true,
    section6: true,
  });

//   const toggleSectionVisibility = (section: string) => {
//     setVisibility((prevState) => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };

  return (
    <>
      <Flex px={5} py="6" justify={"space-around"} alignItems={"center"}>
        <Box display={{ base: "none", md: "block" }}>
          <HStack spacing={10} fontSize={"18px"}>
            {visibility.section1 && (
              <Link href="/#">
                <Text className="underline">Key School Stats</Text>
              </Link>
            )}

            {visibility.section2 && (
              <Link href="/#">
                <Text className="underline">Fee Structure</Text>
              </Link>
            )}

            {visibility.section3 && (
              <Link href="/#">
                <Text className="underline">
                  Admission Criteria and Eligibility
                </Text>
              </Link>
            )}

            {visibility.section4 && (
              <Link href="/#">
                <Text className="underline">Facilities</Text>
              </Link>
            )}

            {visibility.section5 && (
              <Link href="/#">
                <Text className="underline">Special Facilities</Text>
              </Link>
            )}

            {visibility.section6 && (
              <Link href="/#">
                <Text className="underline">Academic</Text>
              </Link>
            )}
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default Scroll;

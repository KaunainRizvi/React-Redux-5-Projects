import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={"40"} p={"16"} color={"white"}>
        
        <Stack direction={["column", "row"]}>
            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
          <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>Subscribe to our Newsletter...</Heading>
           <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input placeholder='Enter Your Email' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor='none'/>
            <Button p={"0"} colorScheme='purple' variant={"ghost"} borderRadius={"0 20px 20px 0"}>
                <AiOutlineSend size={20} />
            </Button>
           </HStack>
            </VStack>

            <VStack w={"full"} borderLeft={["none", "1px solid white"]} borderRight={["none", "1px solid white",]}>
                <Heading textTransform={"uppercase"} textAlign={"center"}>
                    VIDEO HUB
                </Heading>
                <Text>All Rights Reserved 2024</Text>
            </VStack>
            <VStack w={"full"} >
                <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
                <Button variant={"link"} colorScheme='whiteAlpha'>
                    <a target={"_blank"} href='https://instagram.com/kaunain_rizvi'>Instagram</a>
                </Button>
 
                <Button variant={"link"} colorScheme='whiteAlpha'>
                    <a target={"_blank"} href='https://www.facebook.com/kaunainrizvi1/'>Facebook</a>
                </Button>
                <Button variant={"link"} colorScheme='whiteAlpha'>
                    <a target={"_blank"} href='https://kaunainrizvi.github.io/'>Portfolio</a>
                </Button>
            </VStack>
        
        </Stack>
        
         </Box>
  )
}

export default Footer
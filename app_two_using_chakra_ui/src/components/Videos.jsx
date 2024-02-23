import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Videos = () => {
  return (
    <Stack direction={["column", "row"]} h={"100vh"}>

      <VStack w={"full"}>
       <video src='' controls controlsList='nodownload' style={{width:"100%"}}></video>
       <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"auto"}>
        <Heading>Sample Video 1</Heading>
        <Text>This is a sample video for testing. This is also called Description</Text>
       </VStack>
      </VStack>
      <VStack w={["full","xl"]} alignItems={"stretch"} p={"8"} spacing={"8"} overflowY={"auto"}>

        <Button variant={"ghost"} colorScheme='purple'>
          Lecture 1
        </Button>
      </VStack>
    </Stack>
  )
}

export default Videos
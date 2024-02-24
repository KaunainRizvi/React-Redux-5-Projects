import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const Home = () => {

    const headingOptions ={
        pos:"absolute",
        left:"50%",
        top : "50%",
        transform:"translate(-50%, -50%)",
        textTransform:"uppercase",
        p:"4",
        size:"4xl"
    }

    const MyCarousel = ()=>(
        <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} 
        showArrows={false} >
         
         <Box w={"full"}
         h={"100vh"}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch The Future</Heading>
         </Box>

         <Box w={"full"}
         h={"100vh"}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>Future is Gaming</Heading>
         </Box>

         <Box w={"full"}
         h={"100vh"}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Gaming on Console</Heading>
         </Box>

         <Box w={"full"}
         h={"100vh"}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Night Life is Cool...</Heading>
         </Box>
        </Carousel>
    )
   
  return (
    <Box>
  <MyCarousel />

  <Container maxW={"container.xl"} minH={"100vh"} padding={"16"}>

<Heading textTransform={'uppercase'} py={"2"} w={'fit-content'} borderBottom={"2px solid "} m={"auto"}>
   Services
</Heading>

<Stack
h={"full"}
p={"4"}
alignItems={"center"}
direction={["column", "row"]}>
<Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"}/>
<Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
At Video Guru, we pride ourselves on being your ultimate destination for top-notch digital services. Specializing in web development, app development, game development, and video editing, we offer a diverse range of solutions tailored to meet your unique needs.

Web Development: Whether you're a startup or an established enterprise, our expert team of web developers crafts cutting-edge websites that captivate audiences and drive results. From responsive designs to seamless user experiences, we ensure your online presence stands out in today's competitive landscape.

App Development: Transform your ideas into reality with our custom app development services. From iOS to Android, we leverage the latest technologies to create intuitive and engaging mobile applications that resonate with your target audience, enhancing user engagement and satisfaction.

Game Development: Immerse your audience in captivating gaming experiences with our game development expertise. Our talented team brings your concepts to life, delivering immersive gameplay, stunning graphics, and addictive mechanics that keep players coming back for more.

Video Editing: Elevate your content with our professional video editing services. Whether it's promotional videos, tutorials, or social media content, our skilled editors refine your footage into polished masterpieces, enhancing visual appeal and storytelling effectiveness.

At Video Guru, we're committed to excellence in every project we undertake. With a focus on innovation, quality, and client satisfaction, we're your trusted partner for all your digital needs. Let's collaborate and take your digital presence to new heights!</Text>

</Stack>
  </Container>


    </Box>
  )
}

export default Home


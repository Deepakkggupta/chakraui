import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const headingOptions={
  pos:"absolute",
  left:"50%",
  top:"50%",
  transfrm:"translate(-30%, -50%)",
  textTransform:"uppercase",
  p:"4",
  size:"4x1"
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel autoplay infinteLoop interval={1000} showStatus={false} showThumbs>
    
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the future</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Future is Gaming</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the future</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Watch the future</Heading>
    </Box>

  </Carousel>
);

export default Home;

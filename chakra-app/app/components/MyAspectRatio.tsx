import { AspectRatio, Box, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";

function MyAspectRatio() {
    return (
        <>
            <Flex direction="column" gap="10">
                <Box bg="red" w="100%">
                    <AspectRatio maxW='560px' ratio={1}>
                        <iframe
                            title='naruto'
                            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                            allowFullScreen
                        />
                    </AspectRatio>
                </Box>

                <AspectRatio maxW='400px' ratio={4 / 3}>
                    <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
                </AspectRatio>

                <AspectRatio ratio={16 / 3} w="50%">
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng' />
                </AspectRatio>
            </Flex>
        </>
    );
}

export default MyAspectRatio;

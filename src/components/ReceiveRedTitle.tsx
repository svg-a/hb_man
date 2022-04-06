import {
    Grid,
    Text,
    Flex,
} from "@chakra-ui/react";
import React, {useState} from "react";


export default function ReceiveRedTitle() {


    return (

        <Grid
            h='40px'
            width = '100%'
            maxW = '1200px'
            marginTop='2'
            templateRows='repeat(1, 1fr)'
            lineHeight='40px'
            gap={3}
            py="0"
            bg="gray.800"
            borderRadius="5"
        >


            <Flex  bg = 'dark' borderRadius="5px" padding='5px'>
                <Text paddingLeft='10px' fontWeight='bold' fontSize='lg' color = 'white'> 每日红包 </Text>

            </Flex>


        </Grid>
    )

}

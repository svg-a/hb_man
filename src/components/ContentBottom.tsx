import React, { ReactNode } from "react";
import {Flex, Box, Link, Text, Spacer, Icon, Center, Square, useMediaQuery} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";


export default function ContentBottom() {

    const [isMobile] = useMediaQuery("(min-width: 1000px)")
    return isMobile ? (
            <Flex w='100%' maxW = '1180px'  flexDirection="row"
                  alignItems="center"
                  // bg='gray.700'
                  h = '50px'
                  justifyContent="center" marginTop='150px' color='white' marginBottom='20px' style={{float:"inline-end"}}>
                <Square w='270px' paddingRight='20px'>
                    <Text>{'contact us：team@qq.com'.toUpperCase()}</Text>
                </Square>
                <Box w='50px'>
                    <Link  href='https://t.me/RadioCaca' isExternal>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g opacity="1">
                                <path d="M22.4383 4.62171L19.2695 19.5655C19.0305 20.6201 18.407 20.8826 17.5211 20.3858L12.693 16.828L10.3633 19.0686C10.1055 19.3264 9.88986 19.542 9.39298 19.542L9.73986 14.6248L18.6883 6.5389C19.0774 6.19202 18.6039 5.99983 18.0836 6.34671L7.02111 13.3123L2.25861 11.8217C1.22267 11.4983 1.20392 10.7858 2.47423 10.2889L21.1024 3.11233C21.9649 2.7889 22.7195 3.30452 22.4383 4.62171Z" fill="white"/>
                            </g>
                        </svg>
                    </Link >
                </Box>
                <Box>
                    <Link href='https://twitter.com/RadioCacaNFT' isExternal>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g opacity="1">
                                <path d="M21.0002 7.79971V7.19971C21.9002 6.49971 22.7002 5.69971 23.3002 4.69971C22.5002 5.09971 21.6002 5.29971 20.6002 5.39971C21.6002 4.79971 22.3002 3.89971 22.6002 2.69971C21.7002 3.19971 20.7002 3.59971 19.7002 3.79971C18.9002 2.79971 17.7002 2.19971 16.3002 2.19971C13.7002 2.19971 11.7002 4.29971 11.7002 6.99971C11.7002 7.39971 11.7002 7.79971 11.8002 8.09971C8.0002 7.99971 4.60019 5.99971 2.3002 2.99971C1.9002 3.69971 1.7002 4.59971 1.7002 5.49971C1.7002 7.19971 2.5002 8.69971 3.80019 9.59971C3.0002 9.59971 2.3002 9.39971 1.6002 8.99971V9.09971C1.6002 11.4997 3.2002 13.4997 5.30019 13.9997C5.0002 13.9997 4.60019 14.0997 4.10019 14.0997C3.80019 14.0997 3.5002 14.0997 3.2002 13.9997C3.8002 15.9997 5.5002 17.3997 7.50019 17.3997C6.0002 18.6997 4.0002 19.4997 1.8002 19.4997C1.4002 19.4997 1.1002 19.4997 0.700195 19.3997C2.7002 20.7997 5.20019 21.5997 7.80019 21.5997C16.3002 21.6997 21.0002 14.2997 21.0002 7.79971Z" fill="white"/>
                            </g>
                        </svg>
                    </Link>
                </Box>
                <Spacer/>
                <Square w='250px'>
                    <Text>{'@2022 by teamQQ.com'.toUpperCase()}</Text>
                </Square>



            </Flex>

    ):(


        <Flex w='100%' maxW = '1180px'  flexDirection="column"
              alignItems="center"
            // bg='gray.700'
              h = '50px'
              justifyContent="center" marginTop='150px' color='white' marginBottom='20px' style={{float:"inline-end"}}>
            <Square w='270px'  padding='10px' >
                <Text>{'contact us：team@qq.com'.toUpperCase()}</Text>
            </Square>
            <Flex w='100%' alignItems="center" justifyContent="center"  flexDirection="row">
                <Box w='50px' padding='10px'>
                    <Link  href='https://t.me/RadioCaca' isExternal>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g opacity="1">
                                <path d="M22.4383 4.62171L19.2695 19.5655C19.0305 20.6201 18.407 20.8826 17.5211 20.3858L12.693 16.828L10.3633 19.0686C10.1055 19.3264 9.88986 19.542 9.39298 19.542L9.73986 14.6248L18.6883 6.5389C19.0774 6.19202 18.6039 5.99983 18.0836 6.34671L7.02111 13.3123L2.25861 11.8217C1.22267 11.4983 1.20392 10.7858 2.47423 10.2889L21.1024 3.11233C21.9649 2.7889 22.7195 3.30452 22.4383 4.62171Z" fill="white"/>
                            </g>
                        </svg>
                    </Link >
                </Box>
                <Box w='50px'  padding='10px'>
                    <Link href='https://twitter.com/RadioCacaNFT' isExternal>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g opacity="1">
                                <path d="M21.0002 7.79971V7.19971C21.9002 6.49971 22.7002 5.69971 23.3002 4.69971C22.5002 5.09971 21.6002 5.29971 20.6002 5.39971C21.6002 4.79971 22.3002 3.89971 22.6002 2.69971C21.7002 3.19971 20.7002 3.59971 19.7002 3.79971C18.9002 2.79971 17.7002 2.19971 16.3002 2.19971C13.7002 2.19971 11.7002 4.29971 11.7002 6.99971C11.7002 7.39971 11.7002 7.79971 11.8002 8.09971C8.0002 7.99971 4.60019 5.99971 2.3002 2.99971C1.9002 3.69971 1.7002 4.59971 1.7002 5.49971C1.7002 7.19971 2.5002 8.69971 3.80019 9.59971C3.0002 9.59971 2.3002 9.39971 1.6002 8.99971V9.09971C1.6002 11.4997 3.2002 13.4997 5.30019 13.9997C5.0002 13.9997 4.60019 14.0997 4.10019 14.0997C3.80019 14.0997 3.5002 14.0997 3.2002 13.9997C3.8002 15.9997 5.5002 17.3997 7.50019 17.3997C6.0002 18.6997 4.0002 19.4997 1.8002 19.4997C1.4002 19.4997 1.1002 19.4997 0.700195 19.3997C2.7002 20.7997 5.20019 21.5997 7.80019 21.5997C16.3002 21.6997 21.0002 14.2997 21.0002 7.79971Z" fill="white"/>
                            </g>
                        </svg>
                    </Link>
                </Box>
            </Flex>

            <Spacer/>
            <Square w='250px'  padding='10px'>
                <Text>{'@2022 by teamQQ.com'.toUpperCase()}</Text>
            </Square>



        </Flex>
    );
}

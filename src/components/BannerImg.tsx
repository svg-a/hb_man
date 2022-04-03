import { Grid ,Box,Image,Center} from "@chakra-ui/react";

export default function BannerImg() {


    return (
        <Box h='200px'
             width = '100%'
             maxW = '1200px'
             marginTop='1px'
             templateRows='repeat(1, 1fr)'
             lineHeight='40px'
             paddingLeft='10px'
             paddingRight='10px'
             py="0"
             borderRadius="5">
            <Image w = '1200px' h='200px' borderRadius="5" objectFit='cover' src='https://public.nftstatic.com/static/nft/res/890b1e6ca9314422ad211d13c61ac751.png'  alt='bnb' />
        </Box>
    )

}

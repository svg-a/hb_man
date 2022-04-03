import { Grid ,GridItem,Text,Center} from "@chakra-ui/react";


export default function Award() {

    return (
        <Grid
            h='60px'
            width = '100%'
            maxW = '1180px'
            bg = 'gray.800'
            templateRows='repeat(1, 1fr)'
            lineHeight='60px'
            gap={3}
            py="0"
        >
            <Center>
                <Text paddingLeft='10px' fontSize = '18px' fontWeight='bold'   color = 'white'> 🏆 最 新 获 奖 名 单 地 址 </Text>
            </Center>
            {/*<GridItem rowSpan={1} colSpan={1} bg='dark' borderRadius="5">*/}
            {/*    <Text paddingLeft='10px' fontSize = '18px' fontWeight='bold'   color = 'white'> 🏆 最 新 获 奖 名 单 地 址 </Text>*/}

            {/*</GridItem>*/}
        </Grid>
    )


}

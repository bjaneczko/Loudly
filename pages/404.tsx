import { Box, Flex, Text, LinkOverlay } from '@chakra-ui/layout'
import NextImage from 'next/image'
import NextLink from 'next/link'

export default function FourOhFour() {
  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex justify="center" align="center" height="200px">
        <NextImage src="/logo.svg" width={240} height={160}></NextImage>
      </Flex>
      <Flex justify="center" align="center" direction="column" gap="20px">
        <Text fontSize="14em" color="gray.500">
          404
        </Text>
        <NextLink href="/" passHref>
          <LinkOverlay borderBottom="2px solid white">
            Return to home page
          </LinkOverlay>
        </NextLink>
      </Flex>
    </Box>
  )
}

FourOhFour.authPage = true

import prisma from '../lib/prisma'
import GradientLayout from '../components/gradientLayout'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { useMe } from '../lib/hooks'

const Home = ({ artists }) => {
  const { user, isLoading } = useMe()
  // TODO build skeleton while isLoading === true :)
  return (
    <GradientLayout
      color="gray"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image="https://store.playstation.com/store/api/chihiro/00_09_000/container/GR/en/19/EP2402-CUSA05624_00-AV00000000000156/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000"
      roundImage
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artists this month
          </Text>
          <Text fontSize="sm">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="20px" width="20%" key={artist.name}>
              <Box
                maxWidth="300px"
                bg="gray.900"
                borderRadius="4px"
                padding="15px"
              >
                <Image
                  src="https://www.placecage.com/250/250"
                  borderRadius="full"
                ></Image>
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home

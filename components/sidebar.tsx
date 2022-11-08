import NextImage from 'next/image'
import NextLink from 'next/link'
import {
  Box,
  List,
  Divider,
  ListItem,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md'
import SidebarMenu from './sidebarMenu'
import { usePlaylist } from '../lib/hooks'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites',
  },
]

// const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {
  const { playlists } = usePlaylist()
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="160px" marginBottom="20px" paddingX="20px">
          <NextLink href="/" passHref>
            <Box cursor="pointer">
              <NextImage src="/logo.svg" height={60} width={120} />
            </Box>
          </NextLink>
        </Box>
        <Box marginBottom="30px">
          <List spacing={2}>
            {navMenu.map((item) => (
              <SidebarMenu item={item} key={item.name} />
            ))}
          </List>
        </Box>
        <Box>
          <List spacing={2}>
            {musicMenu.map((item) => (
              <SidebarMenu item={item} key={item.name} />
            ))}
          </List>
        </Box>
        <Divider marginY="20px" color="gray.800" />
        <Box
          height="calc(100% - 300px)"
          overflowY="auto"
          paddingY="20px"
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem paddingX="20px" key={playlist.id}>
                <LinkBox>
                  <NextLink
                    href={{
                      pathname: '/playlist/[id]',
                      query: { id: playlist.id },
                    }}
                    passHref
                  >
                    <LinkOverlay>{playlist.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar

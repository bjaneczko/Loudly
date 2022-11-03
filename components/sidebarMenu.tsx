import { LinkBox, LinkOverlay, ListIcon, ListItem } from '@chakra-ui/layout'
import NextLink from 'next/link'

const SidebarMenu = ({ item }) => {
  return (
    <ListItem paddingX="20px" fontSize="16px" key={item.name}>
      <LinkBox>
        <NextLink href={item.route} passHref>
          <LinkOverlay>
            <ListIcon as={item.icon} color="white" marginRight="20px" />
            {item.name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  )
}

export default SidebarMenu

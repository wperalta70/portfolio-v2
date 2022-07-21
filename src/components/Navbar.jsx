import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  useColorModeValue,
  Stack,
  Collapse,
  Link,
  Popover,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon
} from '@chakra-ui/icons';
import React from 'react';
import downloadResume from '@utils/utils.js';

const NAV_ITEMS = [
  {
    label: 'About me',
    href: '#about-me'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Technologies',
    href: '#technologies'
  }
];

export default function Navbar () {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH='60px'
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align='center'
      >
        {/* Start of Hamburger icon for MobileNav */}
        <Flex
          flex={{ base: 0, lg: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', lg: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant='ghost'
            aria-label='Toggle Navigation'
          />
        </Flex>
        {/* End of Hamburger icon for MobileNav */}

        {/* Start of Desktop Nav */}
        {/* Left section of DesktopNav */}
        <Flex flex={{ base: 1 }} justify={{ base: 'center', lg: 'start' }}>
          {/* Logo */}
          <Text
            textAlign={useBreakpointValue({ base: 'center', lg: 'left' })}
            fontFamily='heading'
            color={useColorModeValue('gray.800', 'white')}
          >
            Logo
          </Text>

          {/* Nav items */}
          <Flex display={{ base: 'none', lg: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* Right section of Desktop Nav */}
        <Stack
          flex={0}
          display={{ base: 'none', lg: 'flex' }}
          justify='flex-end'
          direction='row'
          spacing={6}
        >
          <Button onClick={downloadResume}>
            Resume
          </Button>
        </Stack>
        {/* End of Desktop Nav */}
      </Flex>

      {/* Start of Mobile Nav */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      {/* End of Mobile Nav */}
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction='row' spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger='hover' placement='bottom-start'>
            <Link
              p={2}
              href={navItem.href ?? '#'}
              fontSize='sm'
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor
              }}
            >
              {navItem.label}
            </Link>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ lg: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify='space-between'
        align='center'
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

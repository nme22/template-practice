import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
      <Stack spacing={{ base: '4', md: '5' }}>
        <Stack justify="space-between" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Linkedin"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Github"
              icon={<FaGithub fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="orange.500">
          &copy; {new Date().getFullYear()} Community Solar Circle, All rights
          reserved
        </Text>
      </Stack>
    </Container>
  );
}

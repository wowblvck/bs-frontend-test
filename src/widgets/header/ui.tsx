import { Container } from '@chakra-ui/react';
import { Menu } from './menu';

export const Header = () => {
  return (
    <header style={{ padding: '20px 0' }}>
      <Container maxW="6xl">
        <Menu />
      </Container>
    </header>
  );
};

import React from 'react';
import { Box, Button, Container, FormControl, Input, InputLabel, Stack, Typography } from '@mui/material';
import { ChakraProvider, CSSReset, Flex, Heading, Input as ChakraInput, Button as ChakraButton } from '@chakra-ui/react';
import CssBaseline from '@mui/material/CssBaseline';


interface LoginProps {
  useMUI: boolean; // You can determine this based on user preferences or some other condition
}

const Login: React.FC<LoginProps> = ({ useMUI }) => {
  return (
    <Container sx={{ bgcolor: '#cfe8fc', height: '400px', marginTop: '30px', borderRadius: '20px', paddingTop: '50px' }} maxWidth="sm">
      <CssBaseline />
      <Container maxWidth="sm">
        {useMUI ? (
          <Stack spacing={3}>
            <Typography sx={{ fontWeight: 'bold', fontFamily: 'sans-serif ' }} variant="h4">Login </Typography>
            <FormControl fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" type="text" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password" />
            </FormControl>
            <Button sx={{ fontSize: '1em', borderRadius: '10px', letterSpacing: '2px' }} variant="contained" color="primary">
              Login
            </Button>
          </Stack>
        ) : (
          <ChakraProvider>
            <CSSReset />
            <Flex direction="column" alignItems="center" justifyContent="center" height="100vh">
              <Heading as="h4" size="lg" mb={4}>
                Login (Chakra UI)
              </Heading>
              <ChakraInput placeholder="Username" mb={4} />
              <ChakraInput type="password" placeholder="Password" mb={4} />
              <ChakraButton colorScheme="blue">Login</ChakraButton>
            </Flex>
          </ChakraProvider>
        )}
      </Container>
    </Container>
  );
};

export default Login;

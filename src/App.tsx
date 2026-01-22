import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  );
}

export default App;

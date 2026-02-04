import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import GlobalStyle from './styles/global';
import GlobalModal from "./components/moleculs/modal/GlobalModal";
import GlobalBottomSheet from "./components/moleculs/bottomsheet/GlobalBottomSheet";
import {useAuthStore} from "./store/useAuthStore";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}/>
        <GlobalBottomSheet />
        <GlobalModal />
      </ThemeProvider>
    </>
  );
}

export default App;

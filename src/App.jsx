import { useState } from 'react';
import {Provider} from 'react-redux'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';


import AppRouter from './router/AppRouter';
import store from './store/configureStore';













 function App() { 
  

  return(



<Provider store={store}>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    
<AppRouter/>

<GlobalStyles/>
</ThemeProvider>
</Provider>


  )
}

export default App

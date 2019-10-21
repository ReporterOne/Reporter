import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { DrawerMenu, Drawer, DrawerContent } from '~/components/Menu';
import { GlobalStyle, theme, Container } from '~/components/common';
import { Dashboard } from '~/screens';
import AppContext from './AppContext.jsx';
import Avatar from './components/Avatar/Avatar.jsx';

const OptionsContainer = styled(Container)`
  align-items: center;
  padding: 25px 0;
`;

const Separator = styled.div`
  height: 2px;
  width: 70%;
  background-color: #888888;
  margin: 15px 0;
`;

const App = (props) => {

  return (
    <>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <AppContext.Provider value={{}}>
            <Drawer>
              <DrawerMenu>
                <OptionsContainer>
                  <Avatar/>
                  <Separator />
                </OptionsContainer>
              </DrawerMenu>
              <DrawerContent>
                <Router>
                  <Switch>
                    <Route path="/">
                      <Dashboard />
                    </Route>
                  </Switch>
                </Router>
              </DrawerContent>
            </Drawer>
          </AppContext.Provider>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}

export default App;

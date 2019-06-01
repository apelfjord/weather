import React from 'react';

import { AppContainer } from './styled';
import MainScreen from './screens/MainScreen/MainScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <MainScreen/>
      </AppContainer>
    );
  }
}
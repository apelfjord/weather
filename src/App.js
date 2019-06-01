import React from 'react';

import { AppContainer } from './styled';
import TopScreen from './screens/TopScreen/TopScreen'
import MainScreen from './screens/MainScreen/MainScreen'


export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <TopScreen/>
        <MainScreen/>
      </AppContainer>
    );
  }
}
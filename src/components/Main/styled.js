import styled from 'styled-components/native';

import {device, template} from '../../constans/layout'

export const MainScreenContainer = styled.View`
    align-items: center;
    justify-content: flex-start;
    height: ${template.mainFrame};
    width: ${device.width};
  `

  export const MainScreenTextTitle = styled.Text`
    font-size: 50;
    margin-top: 30;
    margin-bottom: 30;

`
 export const MainScreenTextElement = styled.Text`
    font-size: 35;
    padding-horizontal: 20;
    margin-top: 10;
    margin-bottom: 10;
 `
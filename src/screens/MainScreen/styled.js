import styled from 'styled-components/native';

import {device, template} from '../../constans/layout'
console.log(template)

export const MainScreenContainer = styled.View`
    align-items: center;
    justify-content: flex-start;
    height: ${template.mainFrame};
    width: ${device.width};
  `

  export const MainScreenTextTitle = styled.Text`
    font-size: 30;
    margin-top: 30;
`
 export const MainScreenTextElement = styled.Text`
    color: blue;
 `
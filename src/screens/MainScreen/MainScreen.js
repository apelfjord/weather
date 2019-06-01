import React from 'react'

import {MainScreenContainer, MainScreenTextElement, MainScreenTextTitle} from './styled'

export default class MainScreen extends React.Component {
    render() {

        if (!this.props.data) {
            return (
                <MainScreenContainer>
                    <MainScreenTextElement>
                        Type in the name of the city in the field above!
                    </MainScreenTextElement>
                </MainScreenContainer>
            );
        }

        return (
            <MainScreenContainer>
                <MainScreenTextTitle>
                    City Name
                </MainScreenTextTitle>
                <MainScreenTextElement>
                    Emoji
                </MainScreenTextElement>
                <MainScreenTextElement>
                    Weather info
                </MainScreenTextElement>
            </MainScreenContainer>
        )
    }
}

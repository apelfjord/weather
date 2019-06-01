import React from 'react'

import {TextInputContainer, TextInputElement} from './styled';

export default class TextInput extends React.Component {
    render() {
        return (
            <TextInputContainer>
                <TextInputElement placeholder='skriv in din stad här'/>
            </TextInputContainer>
        )
    }
}

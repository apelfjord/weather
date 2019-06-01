import React from 'react'

import {TextInputContainer, TextInputElement} from './styled';

export default class TextInput extends React.Component {

    handlechange = (text) => {
        this.props.onChange(text);
    }

    render() {
        return (
            <TextInputContainer>
                <TextInputElement 
                    placeholder='enter your city here'
                    onChangeText={(text) => this.handlechange(text)}/>
            </TextInputContainer>
        )
    }
}

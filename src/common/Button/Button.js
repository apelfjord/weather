import React from 'react'

import { ButtonTitle, ButtonElement} from './styled'

export default class Button extends React.Component {
    
    handlePress = () => {
        this.props.onPress()
    }
    
    render() {
        return (
                <ButtonElement onPress={this.handlePress}>
                    <ButtonTitle>
                    {this.props.title}
                    </ButtonTitle>
                </ButtonElement>
        )
    }
}

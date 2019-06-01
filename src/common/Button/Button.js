import React from 'react'

import { ButtonTitle, ButtonElement} from './styled'

export default class Button extends React.Component {
    render() {
        return (
                <ButtonElement>
                    <ButtonTitle>
                    {this.props.title}
                    </ButtonTitle>
                </ButtonElement>
        )
    }
}

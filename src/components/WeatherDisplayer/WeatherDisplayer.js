import React from 'react'

import {WeatherDisplayerContainer, WeatherDisplayerTitle, AlignRow} from './styled'
import Button from '../../common/Button/Button'
import TextInput from '../../common/TextInput/TextInput';

export default class WeatherDisplayer extends React.Component {
    render() {
        return (
            <WeatherDisplayerContainer>
                <WeatherDisplayerTitle>
                    Vädersökaren DX
                </WeatherDisplayerTitle>
                    <TextInput />
                    <AlignRow>
                        <Button title='Sök'/>
                        <Button title='Avbryt'/>
                    </AlignRow>
            </WeatherDisplayerContainer>
        )
    }
}

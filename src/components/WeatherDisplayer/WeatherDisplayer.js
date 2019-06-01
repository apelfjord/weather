import React from 'react'

import {WeatherDisplayerContainer, WeatherDisplayerTitle, AlignRow} from './styled'
import WeatherFetcher from '../WeatherFetcher/WeatherFetcher'
import Button from '../../common/Button/Button'
import TextInput from '../../common/TextInput/TextInput';

export default class WeatherDisplayer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {searchValue: ''}
    }

    handleSearch = () => {
        console.log('Searched!')
    }

    handleEmpty = () => {
        console.log('Emptied field!')
    }

    handleChange = (searchValue) => {
        this.setState({searchValue})
        console.log(this.state.searchValue)
    }

    render() {
        return (
            <WeatherDisplayerContainer>
                <WeatherDisplayerTitle>
                    Vädersökaren DX
                </WeatherDisplayerTitle>
                    <TextInput onChange={this.handleChange}/>
                    <AlignRow>
                        <Button title='Sök' onPress={this.handleSearch}/>
                        <Button title='Rensa' onPress={this.handleEmpty}/>
                    </AlignRow>
            </WeatherDisplayerContainer>
        )
    }
}

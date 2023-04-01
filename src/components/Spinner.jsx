import React, { Component } from 'react'
import loading from '../assets/loading.gif'

export class Spinner extends Component {
    render() {
        return (
                <img className='m-[auto]' src={loading} alt="loading" width="100" />
        )
    }
}

export default Spinner
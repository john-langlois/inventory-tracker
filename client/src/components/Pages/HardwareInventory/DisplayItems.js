import { React } from 'react';
import Container from '../../Container/Container'
import './Hardware.css'

function DisplayItems() {
    return(
        <div className = "item-grid">
                <div className='monitor-item'>
                    <Container content = {
                        <div>
                        Monitor Img
                        </div>
                    }></Container>
                </div>
                <div className='desktop-item'>
                <Container content = {
                        <div>
                        Desktop Img
                        </div>
                    }></Container>
                </div>
                <div className='keyboard-item'>
                <Container content = {
                        <div>
                        Keyboard Img
                        </div>
                    }></Container>
                </div>
                <div className='webcam-item'>
                <Container content = {
                        <div>
                        Webcam Img
                        </div>
                    }></Container>
                </div>
                <div className='microphone-item'>
                <Container content = {
                        <div>
                        Microphone Img
                        </div>
                    }></Container>
                </div>
                <div className='laptop-item'>
                <Container content = {
                        <div>
                        Laptop Img
                        </div>
                    }></Container>
                </div> 
        </div>
    )
}

export default DisplayItems;
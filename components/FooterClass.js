import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Permissions, Camera } from 'expo';
import {Footer, FooterTab, Button} from 'native-base';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import CameraEx from './CameraEx';

class FooterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    takePicture = () => {
        
    }
    render() {
        return (
        <Footer>
            <FooterTab style={styles.footerTab}>
                <Button onPress={this.takePicture}>
                    <Icon name="camera" size={30} />
                </Button>
            </FooterTab>
        </Footer>
        );
    }
}

export default FooterClass
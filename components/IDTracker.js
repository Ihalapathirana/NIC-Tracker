import React, { Component } from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Text, Button, View, Alert, TextInput} from 'react-native';
import styles from './Styles';
import Results from './Results';
import FooterClass from './FooterClass';
import IDTrackerManager from '../managers/IdCrackManager';
class IDTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isDisable: true,
            value: "v",
            resultsSet: {},
            radioButtonData: [
                {
                    label: 'v',
                    value: "v",
                },
                {
                    label: 'x',
                    value: "x",
                },
            ],
        }
    }
    onPressFind = () => { 
        this.setState({resultsSet:IDTrackerManager.getBirthDay(this.state.name, this.state.value)});
    }

    onPressClear = () => { 
        this.setState({
            name: '',
            value: 'v',
        })
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Text style={styles.titleTop} > ID Tracker </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title} >Please enter ID number </Text>
                <View style={styles.grid}>
                    <View style={styles.box}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your ID number"
                            keyboardType = 'numeric'
                            value = {this.state.name}
                            maxLength = {this.state.name.substring(0,2) === '20' ? 12 : 9}
                            onChangeText={(text) => 
                                this.setState({
                                    name: text,
                                    isDisable: false,
                                })}
                        />
                    </View>
                    <View style={[styles.box, styles.box2]}>
                        <RadioForm
                            style={styles.box}
                            radio_props={this.state.radioButtonData}
                            initial={0}
                            formHorizontal={false}
                            labelHorizontal={true}
                            animation={true}
                            onPress={(value) => {this.setState({value:value})}}
                            outerCircleSize = {10}
                            outerCircleWidth = {2}
                            innerCircleSize = {5}
                            selectedButtonColor={'#1A5276'}
                            buttonColor={'#124360'}
                            radioStyle={{paddingRight: 10, marginRight: 10}}
                        />
                    </View>
                    <View style={[styles.box, styles.box2]}>
                        <View styles={styles.findButton}>
                        <Button
                        title='Find'
                        onPress={this.onPressFind}
                        color='#1F618D'
                        disabled={this.state.isDisable}>
                        </Button>
                        </View>
                    </View>
                </View>

                <View >
                    <Results style={styles.results}
                    idNumber={this.state.name}
                    value={this.state.value}
                    isNew={this.state.resultsSet.isNewOrOld}
                    birthDay={this.state.resultsSet.birthDay}
                    birthMonth={this.state.resultsSet.month}
                    gender={this.state.resultsSet.gender}
                    year={this.state.resultsSet.year}
                    dayOfWeek={this.state.resultsSet.dayOfWeek}
                    ageFromString = {this.state.resultsSet.ageFromString}
                    newId = {this.state.resultsSet.newId}
                    />
                </View>
                <View style={styles.footer}>
                    <FooterClass/>
                </View>

                <View style={styles.clearButton}>
                <Button
                    title='Clear'
                    onPress={this.onPressClear}
                    color='#1F618D'
                    disabled={this.state.isDisable}>
                </Button>
                </View>
            </View>
        </View>
        );
    }
}

export default IDTracker
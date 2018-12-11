import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Styles'

class Results extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {
            idNumber,
            value, 
            isNew,
            birthDay,
            birthMonth,
            ageFromString,
            gender,
            year,
            dayOfWeek,
            newId,
        } = this.props;

        const votingStatus = ageFromString ? ageFromString >= 18 && value === 'v'? 'Yes' : 'No' :'';
        const birthDate = year ? year + ' ' + birthDay + ' ' + birthMonth : '';
        return (
        <View>
             <Text style = {styles.resultRow}> New:                 <Text style = {styles.spanRow}>{isNew} {isNew ? 'Id' : ''}</Text> </Text>
             <Text style = {styles.resultRow}> Birth Day:        <Text style = {styles.spanRow}>{birthDate} </Text> </Text>
             <Text style = {styles.resultRow}> Day of Birth:    <Text style = {styles.spanRow}>{dayOfWeek}</Text> </Text>
             <Text style = {styles.resultRow}> Gender:            <Text style = {styles.spanRow}>{gender} </Text> </Text>
             <Text style = {styles.resultRow}> Age:                  <Text style = {styles.spanRow}>{ageFromString} </Text> </Text>
             <Text style = {styles.resultRow}> {isNew === 'New' ? 'Old':'New'} ID:            <Text style = {styles.spanRow}>{newId} </Text> </Text>
             <Text style = {styles.resultRow}> Voting status:  <Text style = {styles.spanRow}>{votingStatus} </Text> </Text>
        </View>
        );
    }
}

export default Results
import { Alert } from 'react-native';
import { AgeFromDateString } from 'age-calculator';

const getBirthDay = (id, value) => {
    let gender = 'Male';
    let isValidDay = false;
    let date = {}
    const isNewOrOld = isNew(id);
    const newId = getNewId(isNewOrOld, id, value)
    if((id.length === 9 && isNewOrOld === 'Old') || (id.length === 12 && isNewOrOld === 'New')) { 
        const year = id.length === 9 && isNewOrOld === 'Old' ? '19'+id.substring(0, 2) : id.substring(0, 4);
        let day = id.length === 9 && isNewOrOld === 'Old' ? parseInt(id.substring(2, 5), 10) : parseInt(id.substring(4, 7), 10);
        if(day > 500) {
            day = day - 500;
            gender = 'Female';
        } 
        if (day > 0 && day < 367) {
            isValidDay = true;
            date = getMonth(day);
        }
 
     if(isValidDay) {
        //Alert.alert('Warning', year+'  '+ date.day+ '  '+ date.month+" "+ gender);
        const month = date.month;
        const birthDay = date.day;
        const dayOfWeek = birthDay < 10 ?
            getDayOfWeek(year+"-"+getMonthNo(month)+"-0"+birthDay):
            getDayOfWeek(year+"-"+getMonthNo(month)+"-"+birthDay);

        const ageFromString = birthDay < 10 ?
            new AgeFromDateString(year+"-"+getMonthNo(month)+"-0"+birthDay).age :
            new AgeFromDateString(year+"-"+getMonthNo(month)+"-"+birthDay).age;

        return { year, month, birthDay, gender, isNewOrOld, dayOfWeek, ageFromString, newId };
    }
    else {
        Alert.alert('Warning', 'Invalid date. Please enter valid Id number');
        return {};
    }
    }
    else Alert.alert('Warning', 'Please enter ID number');
    return {};
};

const getMonth = (day) => {
    let month = '';
    if (day > 335) {
        month = "December";
        day = day - 335;
    } else if (day > 305) {
        month = "November";
        day = day - 305;
    } else if (day > 274) {
        month = "October";
        day = day - 274;
    } else if (day > 244) {
        month = "September";
        day = day - 244;
    } else if (day > 213) {
        month = "August";
        day = day - 213;
    } else if (day > 182) {
        month = "July";
        day = day - 182;
    } else if (day > 152) {
        month = "June";
        day = day - 152;
    } else if (day > 121) {
        month = "May";
        day = day - 121;
    } else if (day > 91) {
        month = "April";
        day = day - 91;
    } else if (day > 60) {
        month = "March";
        day = day - 60;
    } else if (day < 32) {
        month = "January";
    } else if (day > 31) {
        month = "February";
        day = day - 31;
    }
    return {month, day}
}

const getMonthNo = (month) => {
    switch(month){
        case 'January':
        return '01';
        case 'February':
        return '02';
        case 'March':
        return '03';
        case 'April':
        return '04';
        case 'May':
        return '05';
        case 'June':
        return '06';
        case 'July':
        return '07';
        case 'August':
        return '08';
        case 'September':
        return '09';
        case 'October':
        return '10';
        case 'November':
        return '11';
        case 'December':
        return '12';
        default: return null;
    }
}
const isNew = (value) => {
    return value.length === 12 ? 'New' : 'Old'; 
}

const getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

const getNewId = (old, oldId, value) => {
    if(old === 'Old') {
        const oldIdYear = oldId.substring(0, 2);
        const oldIdDate = oldId.substring(2, 5);
        const oldIdRest = oldId.substring(5, 9);
        return '19'+oldIdYear+""+oldIdDate+"0"+oldIdRest+""+value;
    } else if(oldId.substring(0, 2)==='20') {
        return 'Not found';
    } else if (oldId.substring(0, 2)==='19') {
        const year = oldId.substring(2, 4);
        const date = oldId.substring(4, 7);
        const rest = oldId.substring(8, 12);
        return ''+year+''+date+''+rest+''+value;
    }
    return oldId;
}

export default {
    getBirthDay,
    isNew,
};

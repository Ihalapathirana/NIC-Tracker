import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar:{
        backgroundColor:'#2471A3',
        paddingTop:40,
        paddingBottom:10,
        flexDirection:'row'
    },
    content:{
        backgroundColor:'#ebeef0',
        flex:1,
    },
    title: { 
        fontSize:20,
        marginTop: 20,
        marginBottom: 20,
        marginLeft:20,
        alignItems: 'center',
    },
    titleTop: { 
        fontSize:25,
        marginTop: 20,
    },
    textInput: {
        width: 200,
        fontSize: 20,
        height:50,
        marginRight:10,
    },
    results: {
        marginLeft:20,
        marginTop:20,
    },
    grid: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    box: {
        flex: 1,
        marginLeft:20
    },
    box2: {
        flex: 0.5,
    }, 
    findButton: {
        flex: 1,
        marginRight: 50,
        marginLeft: 20,
        height:500,
    },
    clearButton: {
        flex: 1,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 50,
        height:500,
    },
    resultRow: {
        padding: 10,
        fontSize: 18,
    },
    spanRow: {
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    footer: {
        position: 'absolute',
        left: 0, 
        right: 0,
        bottom: 0,
    },
    footerStyle: {
        paddingTop:60,
        flexDirection:'row'
    },
    footerTab: {
        backgroundColor:"#2471A3",
    }
});

export default styles
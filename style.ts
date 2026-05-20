import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{  
        height: '10%',
        backgroundColor:'#CCCCCC'},
    headerTitle:{
        color:'white',
        textAlign:'center',
        paddingVertical: 16,
        fontSize: 20,
    },

    myContent:{
        height: '80%', 
        backgroundColor: '#8ff2ea', 
        alignContent: 'center',
        /*justifyContent: 'center',*/
    },

    myText: {
        textAlign: 'center',
        color: 'blue',


    },

    footer:{
        height: '10%',
        backgroundColor:'#CCCCCC',
        paddingVertical:16,
   },
    footerText:{
        textAlign:'center',
        color:'white',
        fontSize: 16,
    },
});

export default styles;
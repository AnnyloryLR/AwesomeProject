import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{  
        height: '10%',
        backgroundColor:'#86d79b',},
    headerTitle:{
        color:'white',
        textAlign:'center',
        paddingVertical: 16,
        fontSize: 20,
    },

    myContent:{
        height: '80%', 
        backgroundColor: '#ffffff', /*'#8ff2ea'*/ 
        alignContent: 'center',
        /*justifyContent: 'center',*/
    },

    myText: {
        textAlign: 'center',
        color: '#86d79b',


    },

    footer:{
        height: '10%',
        backgroundColor:'#86d79b',
        paddingVertical:16,
   },
    footerText:{
        textAlign:'center',
        color:'white',
        fontSize: 16,
    },
});

export default styles;
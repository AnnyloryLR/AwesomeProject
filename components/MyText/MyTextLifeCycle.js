import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';

const MyTextLifeCycle = (props) => {
    const [fullName, setFullName] = useState('');

    useEffect(
        () => {
            console.log('our componente has been mounted');
      

        return () => {
            console.log('our componente has been unmounted or distroyed');
        }
    }, 
    []);

    useEffect(
        () => {
            console.log('our componente has been updated');
        },
        [fullName]
    );

    return (
        <Text style={{color:'#86d79b', textAlign:'center', fontSize:20}}onPress={
            () => 
            setFullName('Annylory Lima Rosa')}>
                Hello, {props.name}! I know your full name is... {fullName}
        </Text>
    );

};

export default MyTextLifeCycle;
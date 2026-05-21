import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from './style';

class MyTextClassBased extends Component {
  
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
        <Text style={{color:'#86d79b', textAlign:'center', fontSize:20}}>
            Hello, {this.props.name}
        </Text>
    )
  }
}

export default MyTextClassBased;
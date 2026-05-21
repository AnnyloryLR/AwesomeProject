import React, {Component} from 'react';
import {Text, View} from 'react-native';

class MyTextClassBased extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        fullName:props.name + " Rosa"
    }
  }
  componentDidMount(){
    console.log("Our component has been mounted");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Our component has been updated",
      prevProps,
      this.state);
  }

  componentWillUnmount(){
    console.log("our component will be unmounted or destroyed");
  }

  render() {
    return (
        <View style={{marginTop:100}}>
            <Text style={{color:'#86d79b', textAlign:'center', fontSize:20}}
            onPress={() => {
                this.setState({...this.state, ...{fullName:'Annylory Lima Rosa'}} );
            }}>
                Hello, {this.props.name}! I know your full name is {this.state.fullName}.
            </Text>
        </View>
        
    )
  }
}

export default MyTextClassBased;
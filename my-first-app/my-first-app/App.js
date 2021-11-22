import React, { Component } from 'react';
import { Button, View,Text } from 'react-native';


export class RedButton extends Component{
  //simple alert on web page
  show(){
    alert("Hello world");
  }
  render(){
    return(
        <Button color="red" title="Click Me" onPress={this.show}></Button>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 150, marginLeft:100, width: "50%"}}>
        <RedButton/>
        <Text>My first React Component</Text>
      </View>
    );
  }
}
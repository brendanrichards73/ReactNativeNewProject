import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {connect} from 'react-redux';


class CounterApp extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={{ flexDirection: 'row', width: 200, justifyContent: "space-around"}}>
            <Button onPress={ () => this.props.increaseCounter()}
              title='Increase' color='green'></Button>
                <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
              <Button onPress={ () => this.props.decreaseCounter()}
              title='Decrease' color='red'>
            </Button>
          </View>
      </View>
    )
  }
 }

 function mapStateToProps(state) {
     return {
         counter: state.counter
     }
 }
 function mapDispatchToProps(dispatch) {
     return {
         increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
         decreaseCounter : () => dispatch({type:'DECREASE_COUNTER'}),

     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   } 
 });

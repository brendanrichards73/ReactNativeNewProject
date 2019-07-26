import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { addPlace } from './actions/place';

class App extends Component {

  state = {
    placeName: '',
    places: []
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
}

placeNameChangeHandler = (value) => {
  this.setState({
    placeName: value
  });    
}

placesOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
      data = { this.props.places }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <ListItem 
          placeName={ info.item.value }
        />
      )}
    />
  )
}

render() {
  return (
    <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "Search Places"
          style = { styles.placeInput }
          value = { this.state.placeName }
          onChangeText = { this.placeNameChangeHandler }
        ></TextInput>
        <Button title = 'Add' 
          style = { styles.placeButton }
          onPress = { this.placeSubmitHandler }
        />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// import React, { Component } from 'react';
// import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
// import ListItem from './components/ListItem';
// import { connect } from 'react-redux';
// import { addPlace } from './actions/place';



// class App extends Component {

//   state = {
//     placeName: '',
//     places: []
//   }

//   placeSubmitHandler = () => {
//     if(this.state.placeName.trim() === '') {
//       return;
//     }
//     this.props.add(this.state.placeName);
//   }

//   placeNameChangeHandler = (value) => {
//     this.setState({
//       placename: value
//     });
//   }

//   placesOutput = () => {
//     return (
//      <FlatList style = { styles.listContainer }
//        data = { this.props.places }
//        keyExtractor={(item, index) => index.toString()}
//        renderItem = { info => (
//          <ListItem 
//            placeName={ info.item.value }
//          />
//        )}
//      />
//    )
//  }

//   render() {
//     return (
//       <View style={ styles.container }>
//         <View style={ styles.inputContainer }>
//           <TextInput
//           placeholder = "Search Places"
//           style = { styles.placeInput }
//           value = { this.state.placeName }
//           onChangeText = { this.placeNameChangeHandler }>
//           </TextInput>
//           <Button title = 'Add'
//             style = { styles.placeButton }
//             onPress = { this.placeSubmitHandler }
//             />
//         </View>
//         <View style = { styles.listContainer }>
//           { this.placesOutput() }
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 30,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//   },
//   placeInput: {
//     width: '70%'
//   },
//   placeButton: {
//   width: '30%'
//   },
//   listContainer: {
//     width: '100%'
//   },
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     add: (name) => {
//       dispatch(addPlace(name))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)


// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// });


// AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);

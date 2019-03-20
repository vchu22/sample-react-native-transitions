import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
  Image,
} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>Hello!</Text>
        <Image
          source={require('../assets/person.png')}
          style={styles.picture}
        />
        <Button
          title="Go to Login Screen"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
export default HomeScreen;
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    margin: 20,
    width: 128,
    height: 128,
  },
};

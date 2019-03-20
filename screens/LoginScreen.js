import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: 'Username', pass: 'Password' };
  }
  static navigationOption = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textfield}
          onChangeText={text => this.setState({ user })}
          value={this.state.user}
        />
        <TextInput
          style={styles.textfield}
          onChangeText={text => this.setState({ pass })}
          value={this.state.pass}
        />
        <Button
          title="Go to Home Screen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
export default LoginScreen;
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfield: {
    height: 40,
    width: 180,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
};

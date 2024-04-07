import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';


const UsernamePage = () => {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/FHS_Hack_Logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Enter your username"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default UsernamePage;
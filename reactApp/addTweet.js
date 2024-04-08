import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const TweetPage = () => {
  const [tweet, setTweet] = useState('');

  const handleAddTweet = () => {
    // Add functionality here to handle adding the tweet
    console.log('Tweet added:', tweet);
    // Resetting tweet input after adding
    setTweet('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/twitter-logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTweet}
        value={tweet}
        placeholder="Enter Tweet"
        multiline={true}
        numberOfLines={2} // adjusting size
      />
      <TouchableOpacity onPress={handleAddTweet} style={styles.button}>
        <Text style={styles.buttonText}>Add Tweet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.menuButton}>
        <Text style={styles.menuText}>Back to Main Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 100, // smaller size
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  menuButton: {
    marginTop: 20,
  },
  menuText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default TweetPage;
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const TweetPage = ({ navigation }) => {
  const [tweet, setTweet] = useState('');

  const handleAddTweet = () => {
    // Add functionality here to handle adding the tweet
    console.log('Tweet added:', tweet);
    // Resetting tweet input after adding
    setTweet('');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/twitter-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Share your thoughts</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTweet}
        value={tweet}
        placeholder="Express yourself in full bloom..."
        multiline={true}
        numberOfLines={6} // Adjusted for more input
      />
      <TouchableOpacity onPress={handleAddTweet} style={styles.button}>
        <Text style={styles.buttonText}>Blossom</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('LoadingScreen')}} style={styles.menuButton}>
        <Text style={styles.menuText}>Return to the Secret Garden</Text>
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
    backgroundColor: '#FEEAFA', // Light pink background
  },
  logo: {
    width: 150, // Increased size for better visibility
    height: 150, // Increased size for better visibility
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4', // Hot pink title
    marginBottom: 20,
    textAlign: 'center', // Centered text
  },
  input: {
    height: 200, // Increased height for more input area
    width: '100%',
    borderColor: '#FF69B4', // Hot pink border color
    borderWidth: 2,
    borderRadius: 20, // Rounded corners
    padding: 10,
    marginBottom: 20,
    fontSize: 18, // Larger font size
    color: '#4B0082', // Indigo text color
    textAlignVertical: 'top', // Start input from top
  },
  button: {
    backgroundColor: '#FF1493', // Deep pink button color
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25, // Rounded corners
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuButton: {
    marginTop: 20,
  },
  menuText: {
    color: '#FF1493', // Deep pink menu text color
    textDecorationLine: 'underline',
    fontSize: 16,
    fontStyle: 'italic', // Italicized menu text
  },
});

export default TweetPage;

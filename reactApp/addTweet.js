import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Sentiment from 'sentiment';
import { Alert } from 'react-native';

const TweetPage = ({ navigation }) => {
  const [tweet, setTweet] = useState('');

  function SentimentAnalysis(text) {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(text);
    return result.score;
  }

  const handleAddTweet = () => {
    // Add functionality here to handle adding the tweet
    console.log('Tweet added:', tweet);
    
    let x = SentimentAnalysis(tweet);
    // Resetting tweet input after adding
    setTweet('');

    if (x < 0){
      Alert.alert("Sentiment Score: " + x, "Negative scores often indicate a strong sign of distress, dissatisfaction, or negative emotions within the analyzed text. Such scores can be reflective of adverse experiences, upset feelings, or critical viewpoints. Recognizing these signals can be pivotal in providing timely support, addressing concerns, and fostering positive outcomes.", [
        { text: "Sentiment Score", onPress: () => console.log() }
      ]);
    }
    else{
      Alert.alert("Sentiment Score: " + x, "Positive scores in sentiment analysis typically signify strong indications of joy, satisfaction, or positive emotions within the analyzed text. These scores frequently reflect positive experiences, happy feelings, or favorable viewpoints. Acknowledging and understanding these signals can be crucial in reinforcing positive behavior, celebrating successes, and continuing to promote an environment of positivity and support. Recognizing the value and impact of positive feedback is essential for maintaining motivation, enhancing relationships, and driving constructive outcomes.", [
        { text: "Sentiment Score", onPress: () => console.log("") }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <Text style={styles.buttonText}>Add Tweet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('UsernamePage')}} style={styles.menuButton}>
          <Text style={styles.menuText}>Return to Main Menu</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const UsernamePage = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleEnter = () => {
    // Navigate to another screen when Enter button is pressed
    navigation.navigate('LoadingScreen');
  };

  const handleLearnAI = () => {
    // Navigate to another screen when Learn AI button is pressed
    navigation.navigate('OurAI');
  };

  const handleMentalHealthAwareness = () => {
    // Navigate to another screen when Mental Health Awareness button is pressed
    navigation.navigate('AwarenessScreen');
  };

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>ChirpAI</Text>
      {/* Subtitle */}
      <Text style={styles.subtitle}>Spreading Wings of Mental Health Support</Text>

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
      {/* Enter Button */}
      <TouchableOpacity style={styles.button} onPress={handleEnter}>
        <View style={[styles.textContainer, styles.adjustTextPosition]}>
          <Text style={styles.buttonText}>Enter</Text>
        </View>
        <Image source={require('./assets/Enter_Logo.png')} style={styles.buttonLogo} />
      </TouchableOpacity>
      {/* Learn AI Button */}
      <TouchableOpacity style={styles.button} onPress={handleLearnAI}>
        <View style={[styles.textContainer, styles.adjustTextPosition]}>
          <Text style={styles.buttonText}>Our AI</Text>
        </View>
        <Image source={require('./assets/AI_Logo.png')} style={styles.buttonLogo} />
      </TouchableOpacity>
      {/* Mental Health Awareness Button */}
      <TouchableOpacity style={styles.button} onPress={handleMentalHealthAwareness}>
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>Mental Health Awareness</Text>
        </View>
        <Image source={require('./assets/Awareness_Logo.png')} style={styles.buttonLogo} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEEAFA',
  },
  title: {
    fontSize: 28, // Slightly larger for prominence
    fontWeight: 'bold',
    color: '#FF88A2', // A soft, fluffy pink for the title text
    textShadowColor: 'rgba(0, 0, 0, 0.1)', 
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: 8, // Adjusted spacing
  },
  subtitle: {
    fontSize: 18, 
    color: '#A282FF', 
    textAlign: 'center',
    maxWidth: '80%',
    textShadowColor: 'rgba(0, 0, 0, 0.1)', 
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#FAB1A0',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  button: {
    flexDirection: 'row',
    height: 60,
    width: '80%',
    justifyContent: 'space-between', // Adjusts children to start and end
    alignItems: 'center',
    backgroundColor: '#A29BFE',
    borderRadius: 25,
    paddingHorizontal: 20, // Padding on both sides
    margin: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonLogo: {
    width: 40,
    height: 40,
  },
  textContainer: {
    flex: 1, // Allows the text to center by taking up the available space
    justifyContent: 'center', // Center text vertically within the container
    alignItems: 'center', // Center text horizontally within the container
  },
  adjustTextPosition: {
    paddingLeft: 45, // Move text slightly to the right
  },
});

export default UsernamePage;

import React from 'react';
import { View, Text, Image, StyleSheet, Linking, ScrollView } from 'react-native';

const AwarenessPage = () => {
  const openSuicideHotline = () => {
    Linking.openURL('tel:1-800-273-TALK');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./assets/Awareness_Logo.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Mental Health Awareness</Text>
      <Text style={styles.description}>
        Mental health is a crucial aspect of overall well-being. According to the World Health Organization (WHO), mental health disorders affect millions of people worldwide, with depression being one of the leading causes of disability.
      </Text>
      <Text style={styles.stat}>
        - Approximately 1 in 5 adults in the United States experiences mental illness each year.
      </Text>
      <Text style={styles.stat}>
        - Suicide is the second leading cause of death among individuals aged 10-34.
      </Text>
      <Text style={styles.stat}>
        - Many mental health conditions are highly treatable, yet the majority of individuals do not receive adequate treatment due to stigma, lack of access to care, or other barriers.
      </Text>
      <Text style={styles.description}>
        It's essential to prioritize mental health awareness and support those in need. If you or someone you know is struggling, don't hesitate to reach out for help.
      </Text>
      <Text style={styles.resource} onPress={openSuicideHotline}>
        - National Suicide Prevention Lifeline: 1-800-273-TALK
      </Text>
      <Text style={styles.resource}>
        - Crisis Text Line: Text "HELLO" to 741741
      </Text>
      <Text style={styles.resource}>
        - SAMHSA Treatment Referral Helpline: 1-877-SAMHSA7
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FEEAFA',
    paddingHorizontal: 20,
    paddingVertical: 40, // Adjust vertical padding
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF88A2',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#1a1a1a',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  stat: {
    fontSize: 16,
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 10,
  },
  resource: {
    fontSize: 16,
    color: '#1a1a1a',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});

export default AwarenessPage;

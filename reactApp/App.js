import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsernamePage from './UsernamePage';
import LoadingScreen from './LoadingScreen';
import AnalyticsScreen from './AnalyticsScreen';
import TweetPage from './addTweet';
import OurAIScreen from './OurAI';

import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs';
import fetch from 'node-fetch';

const model = tf.loadLayersModel("https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json");

async function AnalyzeText(sentences){
    const results = use.load().then(model => {
        model.embed(sentences).then(embeddings => {
            let anomalies = KNNAnomalyDetection(embeddings);
            for (let i = 0; i < anomalies.length; i++){
                console.log(sentences[anomalies[i]]);
            }
        });
    });

    let sentiment_values = [];

    for (let i = 0; i < sentences.length; i++){
        let c = await SentimentAnalysis(sentences[i]);
        sentiment_values.push(c);
    }

    console.log(sentiment_values);
}

function EuclideanDistance(vector1, vector2){
    var sum = 0;
    for (var i = 0; i < vector1.length; i++) {
        sum += Math.pow(vector1[i] - vector2[i], 2);
    }

    return Math.sqrt(sum);
}

// Function to calculate the standard deviation
function calculateStandardDeviation(values) {
    // Step 1: Calculate the mean
    const mean = values.reduce((sum, value) => sum + value, 0) / values.length;

    // Step 2: Calculate the squared differences
    const squaredDifferences = values.map(value => Math.pow(value - mean, 2));

    // Step 3: Calculate the mean of the squared differences
    const meanSquaredDifference = squaredDifferences.reduce((sum, value) => sum + value, 0) / squaredDifferences.length;

    // Step 4: Take the square root of the mean of the squared differences
    const standardDeviation = Math.sqrt(meanSquaredDifference);

    return standardDeviation;
}


function KNNAnomalyDetection(embeddings){
    var embedding_values = embeddings.arraySync();
    var outlier_values = [];

    for (let i = 0; i < embedding_values.length; i++){
        let total = 0;
        for (let j = 0; j < embedding_values.length; j++){
            if (i != j){
                total += EuclideanDistance(embedding_values[i], embedding_values[j]);
            }
        } 
        outlier_values.push(total / (embedding_values.length - 1));
    }
    let difference_score = calculateStandardDeviation(outlier_values);

    const sorted_values = [...outlier_values].sort();

    let fourth_quartile_threshold = sorted_values[sorted_values.length-2];

    let anomalies = []

    for (let p = 0; p < sorted_values.length; p++){
        if (outlier_values[p] > fourth_quartile_threshold){
            anomalies.push(p);
        }
    }

    return anomalies;
}

async function SentimentAnalysis(text){
    const metadata = await fetch('https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('There was a problem fetching the JSON file:', error);
    });
    const trimmed = text.trim().toLowerCase().replace(/(\.|\,|\!)/g, '').split(' ');
    const inputBuffer = tf.buffer([1, metadata.max_len], "float32");
    trimmed.forEach((word, i) => inputBuffer.set(metadata.word_index[word] + metadata.index_from, 0, i));
    const input = inputBuffer.toTensor();
    const predictOut = (await model).predict([input]);
    const positivity = predictOut.dataSync()[0];
    if (positivity < 0.95){
    }
    else{
    }

    console.log(positivity);

    return positivity;
}


const Stack = createNativeStackNavigator();

const App = () => {

  console.log("check");

  AnalyzeText(["test1", "test2", "test3"]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UsernamePage"
          component={UsernamePage}
          options={{ title: ' ' }}
        />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ title: ' ' }}
        />
        <Stack.Screen
          name="AnalyticsScreen"
          component={AnalyticsScreen}
          options={{ title: ' ' }}
        />
        <Stack.Screen
          name="AddTweet"
          component={TweetPage}
          options={{ title: ' ' }}
        />
        <Stack.Screen
          name="OurAI"
          component={OurAIScreen}
          options={{ title: ' ' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

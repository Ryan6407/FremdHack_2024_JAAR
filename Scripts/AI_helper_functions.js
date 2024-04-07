import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs';
import fetch from 'node-fetch';

const model = tf.loadLayersModel("https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json");

function AnalyzeText(sentences){
    const results = use.load().then(model => {
        model.embed(sentences).then(embeddings => {
            DetectAnomaly(embeddings);
        });
    });
}

function DetectAnomaly(embeddings){
    embeddings.print(true);
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
    console.log(text);
    console.log(positivity);
    if (positivity < 0.95){
        console.log("BAD");
    }
    else{
        console.log("SEEMS OK");
    }
}


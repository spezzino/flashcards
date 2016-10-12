import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Button from './components/Button';

const api = 'https://flashscards.herokuapp.com/api/flashcards/random';

class App extends Component {
  componentWillMount() {
    axios.get(api)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onShowAnswerPress() {

  }

  onNextFlashcardPress() {

  }

  render() {
    return (
      <View>
        <Header headerText="Flashcards" />
        <Card>
          <CardSection>
            <Text>
              Topic
            </Text>
          </CardSection>

          <CardSection>
            <Text>
              Question
            </Text>
          </CardSection>

          <CardSection>
            <Text>
              Answer
            </Text>
          </CardSection>
        </Card>
        <Button onPress={this.onShowAnswerPress()}>Show Answer</Button>
        <Button onPress={this.onNextFlashcardPress()}>Next Flashcard</Button>
      </View>
    );
  }
}

export default App;

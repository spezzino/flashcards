import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Button from './components/Button';

const api = 'https://flashscards.herokuapp.com/api/flashcards/random';

class App extends Component {
  state = {
    flashcard: {
      topic: ['Topic'],
      question: 'Question',
      answer: 'answer'
    },
    isAnswerVisible: false
  };

  componentWillMount() {
    this.getFlashcard();
  }

  onShowAnswerPress() {
    this.setState({ isAnswerVisible: true });
  }

  onNextFlashcardPress() {
    this.getFlashcard();
  }

  getFlashcard() {
    axios.get(api)
      .then((response) => {
        this.setState({ flashcard: response.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderTopic() {
    return (
      <Text>
        {this.state.flashcard.topic.join()}
      </Text>
    );
  }

  renderQuestion() {
    return (
      <Text>
        {this.state.flashcard.question}
      </Text>
    );
  }

  renderAnswer() {
    if (this.state.isAnswerVisible) {
      return (
        <Text>
          {this.state.flashcard.answer}
        </Text>
      );
    }

    return (
      <Text>
        Answer is hidden
      </Text>
    );
  }

  render() {
    return (
      <View>
        <Header headerText="Flashcards" />
        <Card>
          <CardSection>
            {this.renderTopic()}
          </CardSection>

          <CardSection>
            {this.renderQuestion()}
          </CardSection>

          <CardSection>
            {this.renderAnswer()}
          </CardSection>
        </Card>
        <Button onPress={() => this.onShowAnswerPress()}>Show Answer</Button>
        <Button onPress={() => this.onNextFlashcardPress()}>Next Flashcard</Button>
      </View>
    );
  }
}

export default App;

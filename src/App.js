import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Button from './components/Button';

class App extends Component {
  onShowAnswerPress(){

  }

  onNextFlashcardPress(){

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

const styles = {
};

export default App;

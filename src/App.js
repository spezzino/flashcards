import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Button from './components/Button';

class App extends Component {
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
        <Button>Show Answer</Button>
        <Button>Next Flashcard</Button>
      </View>
    );
  }
}

const styles = {
};

export default App;

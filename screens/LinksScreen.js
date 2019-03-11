import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { MonoText } from '../components/StyledText';
import MyContext from '../context-example';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.getStartedContainer}>
          <MyContext.Consumer>
            {({ text }) => (
              <Text style={styles.getStartedText}>
                See if the values from context change too:
                <MonoText style={styles.codeHighlightText}>{text}</MonoText>
              </Text>
            )}
          </MyContext.Consumer>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

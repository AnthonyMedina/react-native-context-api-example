import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MonoText } from '../components/StyledText';

// 1. import your context into any file you want to use it
import MyContext from '../context-example';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            {/*
              2. If you want to use the values from your context,
              wrap that place in a consumer
            */}
            <MyContext.Consumer>
              {/* 
                3. The consumer requires a function as a child
                  This function will be called with the `value` that is passed to the nearest provider.
              */}
              {({ text }) => (
                // 4. Here, I am just interested in the `text` part of the value, and destructure it
                // 5. Anything returned from this function will be rendered
                <Text style={styles.getStartedText}>
                  Here is my context text:
                  <MonoText style={styles.codeHighlightText}>{text}</MonoText>
                </Text>
              )}
            </MyContext.Consumer>
          </View>

          <View style={styles.helpContainer}>
            {/* 
              6. You can use the consumer wherever you like
                although it might, in this case, be using it higher up -rather than twice.
            */}
            <MyContext.Consumer>
              {({ toggleText }) => (
                // 7. This time, I destructured the function to update the context.
                // 8. This should be possible anywhere below the Provider in the tree
                <TouchableOpacity onPress={toggleText} style={styles.helpLink}>
                  <Text style={styles.helpLinkText}>
                    Change my context text
                  </Text>
                </TouchableOpacity>
              )}
            </MyContext.Consumer>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

// 9. can also access it's values on `this.context` if you do this:
// HomeScreen.contextType = MyContext;

// 10. See LinksScreen.js, where there are no more comments, but magic happens

export default HomeScreen;

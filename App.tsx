import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {Text, Icon, Button, Box} from '@components';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" bold marginBottom="s8">
            Hello,
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Enter your credentials to sing in!
          </Text>
          <Box mb="s20">
            <TextInput
              style={{
                borderWidth: 1,
                height: 50,
                borderRadius: 12,
                paddingLeft: 20,
              }}
              placeholder="E-mail"
            />
          </Box>
          <Box>
            <TextInput
              style={{
                borderWidth: 1,
                height: 50,
                borderRadius: 12,
                paddingLeft: 20,
              }}
              placeholder="Password"
            />
          </Box>
          <Text
            color="primary"
            preset="paragraphSmall"
            bold
            marginTop="s10"
            marginBottom="s48">
            Forgot Password
          </Text>
          <Button title="Sign In" />
          <Button title="Sign Up" marginTop="s12" preset="outline" />
        </View>
        {/*<Icon name="eyeOff" color="carrotSecondary" size={60} />*/}
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

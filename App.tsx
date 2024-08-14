import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text, Button, Box, TextInput, Icon} from '@components';
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
          <TextInput
            boxProps={{marginBottom: 's20'}}
            errorMessage="Error here in name"
            placeholder="E-mail"
            label="E-mail"
          />
          <Box>
            <TextInput
              boxProps={{marginBottom: 's10'}}
              placeholder="Password"
              label="Password"
              RightComponent={<Icon name="eyeOn" color="gray2" />}
            />
          </Box>
          <Text color="primary" preset="paragraphSmall" bold marginBottom="s48">
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

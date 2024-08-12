import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {Text} from './src/components/Text/Text.tsx';


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text preset={'headingLarge'}>Hello World</Text>
    </SafeAreaView>
  );
}

export default App;

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text.tsx';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset={'headingLarge'} italic style={{color: 'red'}}>
        Hello World
      </Text>
      <Text preset={'paragraphSmall'} style={{color: 'red'}}>
        Hello World
      </Text>
    </SafeAreaView>
  );
}

export default App;

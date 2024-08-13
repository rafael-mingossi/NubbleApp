import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text.tsx';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme.ts';
import {Button} from './src/components/Button/Button.tsx';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon.tsx';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset={'headingLarge'} italic>
          Hello World
        </Text>
        <View style={{paddingHorizontal: 10}}>
          <Button loading title="Button" marginBottom="s16" />
          <Button title="Primary" marginBottom="s16" />
          <Button title="Primary" marginBottom="s16" disabled />
          <Button title="Outline" preset={'outline'} marginBottom="s16" />
          <Button title="Outline" preset={'outline'} disabled />
        </View>
        <EyeOffIcon colour="red" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

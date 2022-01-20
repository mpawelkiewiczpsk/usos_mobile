import React from 'react';
import StackNavigation from "./src/navigation/Stack";
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#f4511e',
        danger: 'red',
        gray: '#ccc',
    },
};

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <StackNavigation />
      </PaperProvider>
  );
}


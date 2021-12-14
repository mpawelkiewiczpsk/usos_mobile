import React from 'react';
import StackNavigation from "./src/navigation/Stack";
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
      <PaperProvider>
        <StackNavigation />
      </PaperProvider>
  );
}


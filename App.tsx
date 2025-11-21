import AppNavigator from "./src/navigation/AppNavigator";

import { NavigationContainer } from '@react-navigation/native';
import { LanguageProvider } from "./src/context/LanguageProvider";
import { ThemeProvider } from "./src/context/ThemeProvider";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </LanguageProvider >
      </ThemeProvider>
    </>
  );
}

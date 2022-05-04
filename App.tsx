import 'react-native-gesture-handler';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate as PersistProvider } from 'redux-persist/integration/react';

import { baseTheme } from 'src/theme';
import Navigation from 'src/navigation';
import store, { persistor } from 'src/redux/store';

const queryClient = new QueryClient();

const App = () => (
    <ReduxProvider store={store}>
        <PersistProvider loading={null} persistor={persistor}>
            <ThemeProvider theme={baseTheme}>
                <QueryClientProvider client={queryClient}>
                    <Navigation />
                </QueryClientProvider>
            </ThemeProvider>
        </PersistProvider>
    </ReduxProvider>
);

export default App;

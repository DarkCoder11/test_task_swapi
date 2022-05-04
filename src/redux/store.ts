import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import slices from './state';
import middlewares from './middlewares';

const store = configureStore({
    reducer: slices,
    middleware: middlewares,
});

export const persistor = persistStore(store);

export default store;

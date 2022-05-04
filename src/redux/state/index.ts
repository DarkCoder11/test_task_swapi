import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import stateExample from './exampleState/slice';

const rootReducer = combineReducers({
    stateExample,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    blacklist: [],
};

const slices = persistReducer(persistConfig, rootReducer);

export default slices;

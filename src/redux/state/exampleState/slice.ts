import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Reducer } from 'src/redux/types';

import { State } from './types';

const initialState: State = {
    data: [],
};

const stateExample = createSlice({
    name: Reducer.EXAMPLE_STATE,
    initialState: initialState,
    reducers: {
        setData(state, action: PayloadAction<any>) {
            state.data = action.payload;
        },
    },
});

// export const setData = (data: any[]) => (dispatch: AppDispatch) => {
//     dispatch(stateExample.actions.setData(data));
// };

export default stateExample.reducer;

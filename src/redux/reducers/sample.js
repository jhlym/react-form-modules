import { handleActions } from 'redux-actions';
import { SAMPLE_TYPE } from '../actions/sample';

// initial state
const initialState = {
  data: {}
};

// reducer
const sample = handleActions(
  {
    [SAMPLE_TYPE]: (state, action) => ({ sample: action.payload })
  },
  initialState
);

export default sample;

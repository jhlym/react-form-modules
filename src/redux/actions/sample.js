import { createAction } from 'redux-actions';

export const SAMPLE_TYPE = 'sample/TYPE';
export const sampleAction = createAction(SAMPLE_TYPE, sample => sample);
export const sampleAsync = input => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(sampleAction(input));
  }, 1000);
};

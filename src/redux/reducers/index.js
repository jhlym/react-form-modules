import { combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';
import sample from './sample';

const initialUser = {
  name: '',
  email: ''
};

const reactReduxForm = combineForms(
  {
    user: initialUser
  },
  'form'
);

export default combineReducers({ sample, form: reactReduxForm });

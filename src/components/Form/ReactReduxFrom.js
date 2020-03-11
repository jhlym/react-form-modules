import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

const ReactReduxFrom = () => {
  const handleSubmit = user => {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
    console.dir(user);
  };
  return (
    <Form model="form" onSubmit={user => handleSubmit(user)}>
      <label htmlFor="user.firstName">First name:</label>
      <Control.text model="user.firstName" id="user.firstName" />

      <label htmlFor="user.lastName">Last name:</label>
      <Control.text model="user.lastName" id="user.lastName" />

      <button type="submit">Finish registration!</button>
    </Form>
  );
};

export default ReactReduxFrom;

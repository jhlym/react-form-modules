import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="example" ref={register} />
        <input
          type="text"
          name="exampleRequired"
          ref={register({ required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default ReactHookForm;

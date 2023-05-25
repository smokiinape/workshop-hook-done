import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { InfoContext } from './MyContext.jsx';
import { useNavigate } from 'react-router-dom';





const Step1 = () => {
  const { stepInfo, setStepInfo } = useContext(InfoContext);
  const Navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required('Namn är obligatoriskt'),
    email: Yup.string()
      .required('E-post är obligatoriskt')
      .email('Ogiltig e-postadress'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setStepInfo(data);
    Navigate('/step2');
    setStepInfo(data);
    console.log(stepInfo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Namn:</label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">E-post:</label>
        <input
          type="text"
          id="email"
          {...register('email')}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <button type="submit">Nästa</button>
    </form>
  );
};

export default Step1;

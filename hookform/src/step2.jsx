import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { InfoContext } from './MyContext.jsx';
import { useNavigate } from 'react-router-dom';




const Step2 = () => {
  const { stepInfo, setStepInfo} = useContext(InfoContext);
  const Navigate = useNavigate();

  const schema = Yup.object().shape({
    address: Yup.string().required('Adress är obligatoriskt'),
    city: Yup.string().required('Stad är obligatoriskt'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setStepInfo({...stepInfo, ...data});
    Navigate('/step3');
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="address">Adress:</label>
        <input
          type="text"
          id="address"
          {...register('address')}
          className={errors.address ? 'error' : ''}
        />
        {errors.address && <p>{errors.address.message}</p>}
      </div>

      <div>
        <label htmlFor="city">Stad:</label>
        <input
          type="text"
          id="city"
          {...register('city')}
          className={errors.city ? 'error' : ''}
        />
        {errors.city && <p>{errors.city.message}</p>}
      </div>

      <button type="submit">Nästa</button>
    </form>
  );
};

export default Step2;

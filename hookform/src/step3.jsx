import React from 'react';
import { useForm } from 'react-hook-form';
import { InfoContext } from './MyContext.jsx';
import { useContext } from 'react';

const Step3 = () => {
  const { stepInfo, setStepInfo} = useContext(InfoContext);

  const { watch } = useForm();
  const formStateStep1 = watch(['name', 'email']);
  const formStateStep2 = watch(['address', 'city']);
  
console.log(stepInfo)
  return (
    <div>
    {/* <h2>Sammanfattning</h2>
    <p>Namn: {formStateStep1.name}</p>
    <p>E-post: {formStateStep1.email}</p>
    <p>Adress: {formStateStep2.address}</p>
    <p>Stad: {formStateStep2.city}</p> */}
  </div>
  );
};

export default Step3;

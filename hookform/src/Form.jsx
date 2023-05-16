import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const Step1 = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Namn är obligatoriskt'),
      email: Yup.string().required('E-post är obligatoriskt').email('Ogiltig e-postadress'),
    }),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" ref={register} />
      {errors.name && <p>{errors.name.message}</p>}

      <input type="text" name="email" ref={register} />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Nästa</button>
    </form>
  );
};

const Step2 = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: Yup.object().shape({
      address: Yup.string().required('Adress är obligatoriskt'),
      city: Yup.string().required('Stad är obligatoriskt'),
    }),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="address" ref={register} />
      {errors.address && <p>{errors.address.message}</p>}

      <input type="text" name="city" ref={register} />
      {errors.city && <p>{errors.city.message}</p>}

      <button type="submit">Nästa</button>
    </form>
  );
};

const Step3 = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="phone" ref={register} />

      <button type="submit">Skicka</button>
    </form>
  );
};

const Form = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/step1">Steg 1</Link>
          </li>
          <li>
            <Link to="/step2">Steg 2</Link>
          </li>
          <li>
            <Link to="/step3">Steg 3</Link>
          </li>
        </ul>
      </nav>

      <RouterSwitch>
        <Route path="/step1">
          <Step1 onSubmit={onSubmit} />
        </Route>
        <Route path="/step2">
          <Step2 onSubmit={onSubmit} />
        </Route>
        <Route path="/step3">
          <Step3 onSubmit={onSubmit} />
        </Route>
      </RouterSwitch>
    </Router>
  );
};

export default Form;
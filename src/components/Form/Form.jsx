import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Form.styles';
import Button from 'components/Button/Button';
import FormField from 'components/FormField/FormField';

const Form = ({ handleSubmit, handleChange, formValue }) => {
  return (
    <Wrapper as="form" onSubmit={handleSubmit}>
      <FormField label="Name" id="name" name="name" value={formValue.nameValue} onChange={handleChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValue.attendanceValue} onChange={handleChange} />
      <FormField label="Average" id="average" name="average" value={formValue.average} onChange={handleChange} />
      <Button>Dodaj</Button>
    </Wrapper>
  );
};

Form.propTypes = {};

export default Form;

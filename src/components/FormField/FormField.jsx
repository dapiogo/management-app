import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/Label/Label';
import { Input } from 'components/Input/Input';
import { Wrapper } from './FormField.styles';

const FormField = ({ label, name, id, type = 'text', ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} {...props} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
};

export default FormField;
